// ============================================
// Component MessageContent - Render markdown content đẹp
// ============================================

import React from 'react';

interface MessageContentProps {
  content: string;
}

interface MatchResult {
  match: RegExpMatchArray;
  type: string;
  index: number;
}

// Hàm parse và render markdown
export default function MessageContent({ content }: MessageContentProps) {
  // Parse content thành các phần
  const renderContent = () => {
    // Tách theo dòng
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];
    let listType: 'ordered' | 'unordered' | null = null;

    const flushList = () => {
      if (listItems.length > 0 && listType) {
        if (listType === 'ordered') {
          elements.push(
            <ol key={`ol-${elements.length}`} className="list-decimal list-inside space-y-2 my-3 ml-2">
              {listItems.map((item, idx) => (
                <li key={idx} className="text-vn-cream/90">
                  {renderInlineMarkdown(item)}
                </li>
              ))}
            </ol>
          );
        } else {
          elements.push(
            <ul key={`ul-${elements.length}`} className="space-y-2 my-3 ml-2">
              {listItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-vn-cream/90">
                  <span className="text-vn-yellow mt-1.5 text-xs">●</span>
                  <span>{renderInlineMarkdown(item)}</span>
                </li>
              ))}
            </ul>
          );
        }
        listItems = [];
        listType = null;
      }
    };

    lines.forEach((line, lineIndex) => {
      const trimmedLine = line.trim();

      // Kiểm tra ordered list (1. 2. 3. ...)
      const orderedMatch = trimmedLine.match(/^(\d+)\.\s+(.+)$/);
      if (orderedMatch) {
        if (listType !== 'ordered') {
          flushList();
          listType = 'ordered';
        }
        listItems.push(orderedMatch[2]);
        return;
      }

      // Kiểm tra unordered list (- hoặc *)
      const unorderedMatch = trimmedLine.match(/^[-*]\s+(.+)$/);
      if (unorderedMatch) {
        if (listType !== 'unordered') {
          flushList();
          listType = 'unordered';
        }
        listItems.push(unorderedMatch[1]);
        return;
      }

      // Flush list nếu đang có
      flushList();

      // Dòng trống
      if (!trimmedLine) {
        elements.push(<div key={`br-${lineIndex}`} className="h-2" />);
        return;
      }

      // Paragraph thường
      elements.push(
        <p key={`p-${lineIndex}`} className="text-vn-cream/90 leading-relaxed">
          {renderInlineMarkdown(trimmedLine)}
        </p>
      );
    });

    // Flush list cuối cùng nếu có
    flushList();

    return elements;
  };

  // Render inline markdown (bold, italic, code)
  const renderInlineMarkdown = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let keyIndex = 0;

    while (remaining.length > 0) {
      // Tìm **bold**
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      // Tìm `code`
      const codeMatch = remaining.match(/`([^`]+)`/);
      // Tìm "trích dẫn"
      const quoteMatch = remaining.match(/"([^"]+)"/);

      // Tìm match đầu tiên
      let firstMatch: MatchResult | null = null;
      
      if (boldMatch && boldMatch.index !== undefined) {
        firstMatch = { match: boldMatch, type: 'bold', index: boldMatch.index };
      }
      if (codeMatch && codeMatch.index !== undefined) {
        if (!firstMatch || codeMatch.index < firstMatch.index) {
          firstMatch = { match: codeMatch, type: 'code', index: codeMatch.index };
        }
      }
      if (quoteMatch && quoteMatch.index !== undefined) {
        if (!firstMatch || quoteMatch.index < firstMatch.index) {
          firstMatch = { match: quoteMatch, type: 'quote', index: quoteMatch.index };
        }
      }

      if (firstMatch) {
        // Thêm text trước match
        if (firstMatch.index > 0) {
          parts.push(
            <span key={`text-${keyIndex++}`}>
              {remaining.substring(0, firstMatch.index)}
            </span>
          );
        }

        // Render match theo type
        const matchContent = firstMatch.match[1];
        switch (firstMatch.type) {
          case 'bold':
            parts.push(
              <strong 
                key={`bold-${keyIndex++}`} 
                className="font-semibold text-vn-yellow"
              >
                {matchContent}
              </strong>
            );
            break;
          case 'code':
            parts.push(
              <code 
                key={`code-${keyIndex++}`} 
                className="bg-vn-dark-light px-1.5 py-0.5 rounded text-vn-yellow font-mono text-sm"
              >
                {matchContent}
              </code>
            );
            break;
          case 'quote':
            parts.push(
              <span 
                key={`quote-${keyIndex++}`} 
                className="text-vn-gold italic"
              >
                "{matchContent}"
              </span>
            );
            break;
        }

        // Tiếp tục với phần còn lại
        remaining = remaining.substring(firstMatch.index + firstMatch.match[0].length);
      } else {
        // Không còn match nào, thêm phần còn lại
        parts.push(<span key={`rest-${keyIndex++}`}>{remaining}</span>);
        break;
      }
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="space-y-1">
      {renderContent()}
    </div>
  );
}
