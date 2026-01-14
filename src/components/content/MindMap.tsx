// ============================================
// Component MindMap - Sơ đồ tư duy dạng cây ngang
// ============================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Interface cho node
interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
}

// Dữ liệu Mind Map - Vận dụng Tư tưởng HCM về ĐLDT gắn với CNXH
const mindMapTree: TreeNode = {
  id: 'root',
  label: 'Vận dụng Tư tưởng Hồ Chí Minh về ĐLDT gắn với CNXH',
  children: [
    {
      id: 'branch-1',
      label: 'Kiên định mục tiêu và con đường cách mạng',
      children: [
        {
          id: 'branch-1-1',
          label: 'Mục tiêu: Tiến tới CNXH và Chủ nghĩa Cộng sản',
          children: [
            { id: 'leaf-1-1-1', label: 'Là quá trình hợp quy luật' },
            { id: 'leaf-1-1-2', label: 'Là sự lựa chọn đúng đắn của HCM và Đảng' }
          ]
        },
        {
          id: 'branch-1-2',
          label: 'Cương lĩnh xây dựng đất nước (Đại hội VII, XI)',
          children: [
            { id: 'leaf-1-2-1', label: 'Xác định đường lối chiến lược' },
            { id: 'leaf-1-2-2', label: 'Phù hợp thực tiễn Việt Nam' }
          ]
        },
        {
          id: 'branch-1-3',
          label: 'Định hướng: Thống nhất giữa kiên định và đổi mới',
          children: [
            { id: 'leaf-1-3-1', label: 'Kiên định về nguyên tắc' },
            { id: 'leaf-1-3-2', label: 'Linh hoạt trong phương pháp' }
          ]
        }
      ]
    },
    {
      id: 'branch-2',
      label: 'Phát huy sức mạnh dân chủ xã hội chủ nghĩa',
      children: [
        { id: 'leaf-2-1', label: 'Dân biết, dân bàn, dân làm, dân kiểm tra' },
        { id: 'leaf-2-2', label: 'Nhân dân là chủ và làm chủ xã hội' },
        { id: 'leaf-2-3', label: 'Phát huy quyền làm chủ của nhân dân' }
      ]
    },
    {
      id: 'branch-3',
      label: 'Củng cố, kiện toàn Hệ thống Chính trị',
      children: [
        { id: 'leaf-3-1', label: 'Nâng cao năng lực lãnh đạo của Đảng' },
        { id: 'leaf-3-2', label: 'Xây dựng Nhà nước pháp quyền XHCN' },
        { id: 'leaf-3-3', label: 'Phát huy vai trò của các tổ chức CT-XH' }
      ]
    },
    {
      id: 'branch-4',
      label: "Đấu tranh chống suy thoái, 'tự diễn biến', 'tự chuyển hóa'",
      children: [
        { id: 'leaf-4-1', label: 'Chống suy thoái tư tưởng chính trị' },
        { id: 'leaf-4-2', label: 'Chống suy thoái đạo đức, lối sống' },
        { id: 'leaf-4-3', label: 'Ngăn chặn các biểu hiện "tự diễn biến"' }
      ]
    }
  ]
};

// Component cho một node
function TreeNodeComponent({ 
  node, 
  level = 0,
  expandedNodes,
  toggleNode 
}: { 
  node: TreeNode; 
  level?: number;
  expandedNodes: Set<string>;
  toggleNode: (id: string) => void;
}) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes.has(node.id);
  const isRoot = level === 0;

  // Colors based on level
  const getNodeStyle = () => {
    if (isRoot) {
      return 'bg-[#2D4A3E] border-[#4A7C59] text-white';
    }
    if (level === 1) {
      return 'bg-[#3D3D3D] border-[#5A5A5A] text-gray-100';
    }
    if (level === 2) {
      return 'bg-[#4A7C59]/20 border-[#4A7C59] text-gray-200';
    }
    return 'bg-[#2A4A3A] border-[#3D6B4F] text-gray-300';
  };

  return (
    <div className="flex items-start">
      {/* Node */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: level * 0.1 }}
        className="flex items-center"
      >
        {/* Connector line from parent */}
        {level > 0 && (
          <div className="w-8 h-px bg-[#4A7C59]/50 flex-shrink-0" />
        )}

        {/* Node button */}
        <button
          onClick={() => hasChildren && toggleNode(node.id)}
          className={`
            relative px-4 py-2.5 rounded-lg border-2 text-left
            transition-all duration-200 whitespace-nowrap
            ${getNodeStyle()}
            ${hasChildren ? 'cursor-pointer hover:brightness-110' : 'cursor-default'}
            ${isRoot ? 'text-base font-semibold' : 'text-sm'}
          `}
        >
          <span>{node.label}</span>
          
          {/* Expand indicator */}
          {hasChildren && (
            <motion.span
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <ChevronRight size={16} />
            </motion.span>
          )}
        </button>
      </motion.div>

      {/* Children */}
      <AnimatePresence>
        {hasChildren && isExpanded && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center ml-2"
          >
            {/* Horizontal connector */}
            <div className="w-6 h-px bg-[#4A7C59]/50 flex-shrink-0" />
            
            {/* Children container */}
            <div className="flex flex-col gap-2 relative">
              {/* Vertical line */}
              <div 
                className="absolute left-0 top-4 bottom-4 w-px bg-[#4A7C59]/30"
                style={{ left: '-12px' }}
              />
              
              {node.children!.map((child, index) => (
                <TreeNodeComponent
                  key={child.id}
                  node={child}
                  level={level + 1}
                  expandedNodes={expandedNodes}
                  toggleNode={toggleNode}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MindMap() {
  // State cho các node đã expand
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['root']));

  // Toggle expand node
  const toggleNode = (nodeId: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  };

  // Expand all
  const expandAll = () => {
    const allIds = new Set<string>();
    const collectIds = (node: TreeNode) => {
      allIds.add(node.id);
      node.children?.forEach(collectIds);
    };
    collectIds(mindMapTree);
    setExpandedNodes(allIds);
  };

  // Collapse all
  const collapseAll = () => {
    setExpandedNodes(new Set(['root']));
  };

  return (
    <div className="py-6">
      {/* Title */}
      <h3 className="font-display text-2xl font-bold text-vn-yellow mb-2 text-center">
        Sơ Đồ Tư Duy
      </h3>
      <p className="text-center text-vn-cream/60 text-sm mb-6">
        Vận dụng Tư tưởng Hồ Chí Minh về Độc lập Dân tộc gắn với CNXH
      </p>

      {/* Controls */}
      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={expandAll}
          className="px-4 py-2 text-sm rounded-lg bg-[#4A7C59] text-white hover:bg-[#5A8C69] transition-colors"
        >
          Mở rộng tất cả
        </button>
        <button
          onClick={collapseAll}
          className="px-4 py-2 text-sm rounded-lg bg-[#3D3D3D] text-gray-300 hover:bg-[#4D4D4D] transition-colors"
        >
          Thu gọn
        </button>
      </div>

      {/* Mind Map Container */}
      <div className="bg-[#1E1E1E] rounded-2xl p-8 border border-[#333] overflow-x-auto">
        <div className="min-w-max">
          <TreeNodeComponent
            node={mindMapTree}
            expandedNodes={expandedNodes}
            toggleNode={toggleNode}
          />
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex justify-center gap-6 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#2D4A3E] border border-[#4A7C59]" />
          <span>Chủ đề chính</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#3D3D3D] border border-[#5A5A5A]" />
          <span>Nhánh cấp 1</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#4A7C59]/20 border border-[#4A7C59]" />
          <span>Nhánh cấp 2</span>
        </div>
      </div>
    </div>
  );
}
