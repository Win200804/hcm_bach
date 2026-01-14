// ============================================
// Component MessageContent - Render markdown content đẹp
// ============================================

import React from 'react';

interface MessageContentProps {
  content: string;
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
      // Tìm *italic*
      const italicMatch = remaining.match(/(?<!\*)\*([^*]+)\*(?!\*)/);
      // Tìm `code`
      const codeMatch = remaining.match(/`([^`]+)`/);
      // Tìm "trích dẫn"
      const quoteMatch = remaining.match(/"([^"]+)"/);

      // Tìm match đầu tiên
      let firstMatch: { match: RegExpMatchArray; type: string } | null = null;
      
      if (boldMatch && boldMatch.index !== undefined) {
        if (!firstMatch || boldMatch.index < (firstMatch.match.index ?? Infinity)) {
          firstMatch = { match: boldMatch, type: 'bold' };
        }
      }
      if (italicMatch && italicMatch.index !== undefined) {
        if (!firstMatch || italicMatch.index < (firstMatch.match.index ?? Infinity)) {
          firstMatch = { match: italicMatch, type: 'italic' };
        }
      }
      if (codeMatch && codeMatch.index !== undefined) {
        if (!firstMatch || codeMatch.index < (firstMatch.match.index ?? Infinity)) {
          firstMatch = { match: codeMatch, type: 'code' };
        }
      }
      if (quoteMatch && quoteMatch.index !== undefined) {
        if (!firstMatch || quoteMatch.index < (firstMatch.match.index ?? Infinity)) {
          firstMatch = { match: quoteMatch, type: 'quote' };
        }
      }

      if (firstMatch && firstMatch.match.index !== undefined) {
        // Thêm text trước match
        if (firstMatch.match.index > 0) {
          parts.push(
            <span key={`text-${keyIndex++}`}>
              {remaining.substring(0, firstMatch.match.index)}
            </span>
          );
        }

        // Render match theo type
        const content = firstMatch.match[1];
        switch (firstMatch.type) {
          case 'bold':
            parts.push(
              <strong 
                key={`bold-${keyIndex++}`} 
                className="font-semibold text-vn-yellow"
              >
                {content}
              </strong>
            );
            break;
          case 'italic':
            parts.push(
              <em 
                key={`italic-${keyIndex++}`} 
                className="italic text-vn-cream"
              >
                {content}
              </em>
            );
            break;
          case 'code':
            parts.push(
              <code 
                key={`code-${keyIndex++}`} 
                className="bg-vn-dark-light px-1.5 py-0.5 rounded text-vn-yellow font-mono text-sm"
              >
                {content}
              </code>
            );
            break;
          case 'quote':
            parts.push(
              <span 
                key={`quote-${keyIndex++}`} 
                className="text-vn-gold italic"
              >
                "{content}"
              </span>
            );
            break;
        }

        // Tiếp tục với phần còn lại
        remaining = remaining.substring(firstMatch.match.index + firstMatch.match[0].length);
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

