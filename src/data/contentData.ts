// ============================================
// Dữ liệu nội dung Tư tưởng Hồ Chí Minh
// về CNXH và Con đường quá độ tại Việt Nam
// ============================================

import { ContentSection, TimelineEvent, MindMapNode } from '../types';

// 6 phần nội dung chính
export const contentSections: ContentSection[] = [
  {
    id: 'section-1',
    title: 'I. Quan Niệm Tổng Quát Về Chủ Nghĩa Xã Hội',
    subtitle: 'Tư tưởng nhân văn và mục tiêu phục vụ con người',
    icon: '🎯',
    image: '/asset/image/Screenshot 2026-01-15 135404.png',
    imageCaption: 'Bác Hồ nói chuyện thân mật với công nhân - thể hiện tư tưởng nhân văn',
    content: [
      {
        id: '1-1',
        heading: '1. Mục tiêu cốt lõi và nhân văn',
        paragraphs: [
          'Trong di sản tư tưởng của mình, Hồ Chí Minh không để lại một định nghĩa mang tính giáo điều hay cứng nhắc về CNXH. Thay vào đó, Người tiếp cận khái niệm này thông qua những cách diễn đạt dung dị, dễ hiểu nhưng vô cùng sâu sắc, tập trung vào mục tiêu phục vụ con người.'
        ],
        bulletPoints: [
          'CNXH trước hết nhằm làm cho nhân dân lao động thoát khỏi nạn bần cùng, đảm bảo mọi người đều có công ăn việc làm.',
          'Mục tiêu tối thượng là mang lại cuộc sống ấm no, tự do và một đời hạnh phúc cho toàn thể nhân dân.',
          'Người khái quát mục tiêu xây dựng xã hội mới bằng cụm từ chiến lược: "Làm sao cho dân giàu, nước mạnh".'
        ],
        quote: '"Làm sao cho dân giàu, nước mạnh"'
      },
      {
        id: '1-2',
        heading: '2. Sự khác biệt về bản chất xã hội',
        paragraphs: [
          'Khác với các chế độ cũ nơi lợi ích cá nhân của một số ít người thuộc giai cấp thống trị được thỏa mãn dựa trên sự áp bức, CNXH là chế độ do nhân dân lao động làm chủ.'
        ],
        bulletPoints: [
          'Trong xã hội này, mỗi cá nhân là một bộ phận của tập thể, giữ vị trí nhất định và đóng góp công sức vào sự phát triển chung.',
          'CNXH và Cộng sản chủ nghĩa là những giai đoạn phát triển khác nhau của cùng một hình thái xã hội, nơi sức sản xuất phát triển cao và không còn vết tích bóc lột.'
        ]
      }
    ]
  },
  {
    id: 'section-2',
    title: 'II. Các Đặc Trưng Cơ Bản Của Xã Hội Xã Hội Chủ Nghĩa',
    subtitle: 'Bốn đặc trưng lớn làm cơ sở nhận diện và xây dựng',
    icon: '🏛️',
    image: '/asset/image/Screenshot 2026-01-15 135438.png',
    imageCaption: 'Bác Hồ bỏ phiếu bầu cử - thể hiện đặc trưng dân chủ của xã hội XHCN',
    content: [
      {
        id: '2-1',
        heading: '1. Đặc trưng về Chính trị: Chế độ Dân chủ',
        paragraphs: [
          'CNXH là một xã hội có chế độ dân chủ thực sự.'
        ],
        bulletPoints: [
          'Nhân dân là chủ và làm chủ dưới sự lãnh đạo của Đảng Cộng sản trên nền tảng liên minh công - nông.',
          'Địa vị cao nhất trong xã hội thuộc về nhân dân; mọi quyền lợi, quyền lực và quyền hạn đều xuất phát từ nhân dân.'
        ]
      },
      {
        id: '2-2',
        heading: '2. Đặc trưng về Kinh tế: Lực lượng sản xuất hiện đại',
        paragraphs: [
          'Xã hội có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại.'
        ],
        bulletPoints: [
          'Chế độ sở hữu công cộng (công hữu) về tư liệu sản xuất chủ yếu là đặc trưng kinh tế cốt lõi.',
          'Lực lượng sản xuất này biểu hiện qua sự phát triển của công cụ lao động, máy móc, sức điện và sức nguyên tử.'
        ]
      },
      {
        id: '2-3',
        heading: '3. Đặc trưng về Văn hóa - Đạo đức và Quan hệ xã hội',
        paragraphs: [
          'Xã hội có trình độ văn hóa và đạo đức phát triển cao, đảm bảo sự công bằng và hợp lý trong mọi quan hệ.'
        ],
        bulletPoints: [
          'Xóa bỏ hiện tượng người bóc lột người; con người được tôn trọng, đối xử bình đẳng.',
          'Các dân tộc trong nước đoàn kết, gắn bó chặt chẽ với nhau.'
        ]
      },
      {
        id: '2-4',
        heading: '4. Đặc trưng về Chủ thể xây dựng',
        paragraphs: [
          'CNXH là công trình tập thể của nhân dân, do nhân dân tự xây dựng dưới sự lãnh đạo của Đảng.'
        ],
        bulletPoints: [
          'Sự lãnh đạo của Đảng cách mạng chân chính, tận tâm phục vụ nhân dân là nhân tố quyết định thành công.'
        ]
      }
    ]
  },
  {
    id: 'section-3',
    title: 'III. Mục Tiêu Và Động Lực Phát Triển Chủ Nghĩa Xã Hội',
    subtitle: 'Các mục tiêu cụ thể và hệ thống động lực thúc đẩy',
    icon: '🚀',
    image: '/asset/image/Screenshot 2026-01-15 135449.png',
    imageCaption: 'Bác Hồ cùng các tầng lớp nhân dân - sức mạnh đoàn kết là động lực phát triển',
    content: [
      {
        id: '3-1',
        heading: '1. Các mục tiêu cụ thể trên mọi lĩnh vực',
        paragraphs: [],
        bulletPoints: [
          'Về Chính trị: Xây dựng chế độ "dân làm chủ", nơi nhân dân thực hiện quyền bầu cử, ứng cử và có quyền tự do ngôn luận, hội họp.',
          'Về Kinh tế: Xây dựng nền kinh tế với công nghiệp và nông nghiệp hiện đại; khoa học kỹ thuật tiên tiến. Kinh tế quốc doanh phải lãnh đạo và Nhà nước ưu tiên phát triển kinh tế hợp tác xã.',
          'Về Văn hóa: Xây dựng nền văn hóa có tính dân tộc, khoa học, đại chúng; triệt để tẩy trừ các tàn dư văn hóa lạc hậu.'
        ]
      },
      {
        id: '3-2',
        heading: '2. Hệ thống động lực thúc đẩy',
        paragraphs: [],
        bulletPoints: [
          'Sức mạnh nhân dân: Hồ Chí Minh khẳng định sức mạnh đoàn kết toàn dân là lực lượng mạnh nhất trong mọi lực lượng.',
          'Lợi ích cá nhân chính đáng: Phải chú ý xem xét và thỏa mãn lợi ích cá nhân đúng đắn để mỗi người có điều kiện cải thiện đời sống riêng, phát huy sở trường cá nhân.',
          'Động lực con người: Muốn xây dựng CNXH trước hết cần có "con người xã hội chủ nghĩa". Đó là những người có đạo đức, ý thức làm chủ, tinh thần tập thể và chống lại chủ nghĩa cá nhân.'
        ],
        quote: '"Sức mạnh đoàn kết toàn dân là lực lượng mạnh nhất trong mọi lực lượng"'
      }
    ]
  },
  {
    id: 'section-4',
    title: 'IV. Thời Kỳ Quá Độ Lên Chủ Nghĩa Xã Hội Tại Việt Nam',
    subtitle: 'Tính chất đặc thù và các nguyên tắc xây dựng then chốt',
    icon: '🔄',
    image: '/asset/image/Screenshot 2026-01-15 135417.png',
    imageCaption: 'Hồ Chí Minh - Mác - Lênin: Nền tảng lý luận của thời kỳ quá độ',
    content: [
      {
        id: '4-1',
        heading: '1. Tính chất và đặc điểm đặc thù',
        paragraphs: [],
        bulletPoints: [
          'Tính chất: Đây là thời kỳ cải biến sâu sắc nhất nhưng cũng phức tạp, lâu dài và gian khổ nhất trong lịch sử.',
          'Đặc điểm lớn nhất: Việt Nam tiến thẳng lên CNXH từ một nước nông nghiệp lạc hậu, không trải qua giai đoạn phát triển tư bản chủ nghĩa.'
        ]
      },
      {
        id: '4-2',
        heading: '2. Các nguyên tắc xây dựng then chốt',
        paragraphs: [],
        bulletPoints: [
          'Nền tảng lý luận: Mọi tư tưởng và hành động phải dựa trên chủ nghĩa Mác - Lênin.',
          'Độc lập dân tộc: Phải giữ vững độc lập dân tộc làm điều kiện tiên quyết cho sự phát triển.',
          'Đoàn kết quốc tế: Học tập kinh nghiệm từ các nước anh em nhưng phải vận dụng sáng tạo, không được áp đặt máy móc.',
          'Xây đi đôi với Chống: Vừa xây dựng các yếu tố mới, vừa phải quyết liệt chống lại các lực lượng phá hoại và các căn bệnh nội bộ như tham ô, lãng phí.'
        ]
      }
    ]
  },
  {
    id: 'section-5',
    title: 'V. Mối Quan Hệ Giữa Độc Lập Dân Tộc Và Chủ Nghĩa Xã Hội',
    subtitle: 'Sợi chỉ đỏ xuyên suốt tư tưởng Hồ Chí Minh',
    icon: '🔗',
    image: '/asset/image/Screenshot 2026-01-15 135427.png',
    imageCaption: 'Bác Hồ đọc Tuyên ngôn Độc lập - Độc lập dân tộc là tiền đề cho CNXH',
    content: [
      {
        id: '5-1',
        heading: 'Mối quan hệ biện chứng',
        paragraphs: [
          'Đây là sợi chỉ đỏ xuyên suốt tư tưởng Hồ Chí Minh, thể hiện mối quan hệ biện chứng không thể tách rời.'
        ],
        bulletPoints: [
          'Độc lập dân tộc là tiền đề: Giải phóng dân tộc là mục tiêu đầu tiên, tạo ra sức mạnh để tiến tới CNXH.',
          'CNXH là bảo chứng bền vững: Chỉ có CNXH mới giải phóng hoàn toàn dân tộc và đảm bảo nền độc lập vững chắc, không để đất nước rơi vào cảnh nô lệ một lần nữa.',
          'Vai trò của Đảng: Sự lãnh đạo tuyệt đối của Đảng là điều kiện cốt yếu để giữ vững mối quan hệ này.'
        ]
      }
    ]
  },
  {
    id: 'section-6',
    title: 'VI. Vận Dụng Trong Sự Nghiệp Đổi Mới Hiện Nay',
    subtitle: 'Áp dụng tư tưởng HCM trong bối cảnh đương đại',
    icon: '🌟',
    image: '/asset/image/Screenshot 2026-01-15 135444.png',
    imageCaption: 'Nhân dân Việt Nam trong thời kỳ đổi mới - Vận dụng tư tưởng HCM',
    content: [
      {
        id: '6-1',
        heading: 'Các phương hướng vận dụng',
        paragraphs: [
          'Tư tưởng Hồ Chí Minh về CNXH tiếp tục là kim chỉ nam cho công cuộc đổi mới và phát triển đất nước trong giai đoạn hiện nay.'
        ],
        bulletPoints: [
          'Phát huy dân chủ: Thực hiện tốt cơ chế "dân biết, dân bàn, dân làm, dân kiểm tra" để người dân thực sự tham gia quản lý xã hội.',
          'Chỉnh đốn Đảng: Đấu tranh chống suy thoái tư tưởng, đạo đức và các biểu hiện "tự diễn biến", "tự chuyển hóa".',
          'Đào tạo con người: Tập trung bồi dưỡng thế hệ con người mới có năng lực làm chủ, có tri thức và đạo đức cách mạng.'
        ],
        quote: '"Dân biết, dân bàn, dân làm, dân kiểm tra"'
      }
    ]
  }
];

// Timeline các mốc quan trọng trong tư tưởng HCM về CNXH
export const timelineEvents: TimelineEvent[] = [
  {
    id: 'tl-1',
    title: 'Nền tảng tư tưởng',
    description: 'Chủ nghĩa Mác - Lênin làm kim chỉ nam',
    detail: 'Mọi tư tưởng và hành động phải dựa trên chủ nghĩa Mác - Lênin, là nền tảng lý luận cho toàn bộ con đường cách mạng.'
  },
  {
    id: 'tl-2',
    title: 'Mục tiêu nhân văn',
    description: 'Dân giàu, nước mạnh',
    detail: 'CNXH nhằm làm cho nhân dân thoát khỏi bần cùng, mang lại cuộc sống ấm no, tự do, hạnh phúc cho toàn dân.'
  },
  {
    id: 'tl-3',
    title: 'Đặc trưng chính trị',
    description: 'Chế độ dân chủ thực sự',
    detail: 'Nhân dân là chủ và làm chủ, mọi quyền lực xuất phát từ nhân dân dưới sự lãnh đạo của Đảng.'
  },
  {
    id: 'tl-4',
    title: 'Đặc trưng kinh tế',
    description: 'Lực lượng sản xuất hiện đại',
    detail: 'Nền kinh tế phát triển cao với công hữu về tư liệu sản xuất, công nghiệp và nông nghiệp hiện đại.'
  },
  {
    id: 'tl-5',
    title: 'Đặc trưng văn hóa',
    description: 'Xóa bỏ bóc lột, công bằng xã hội',
    detail: 'Văn hóa đạo đức cao, con người được tôn trọng bình đẳng, các dân tộc đoàn kết gắn bó.'
  },
  {
    id: 'tl-6',
    title: 'Động lực phát triển',
    description: 'Sức mạnh đoàn kết toàn dân',
    detail: 'Đoàn kết toàn dân là lực lượng mạnh nhất, kết hợp lợi ích cá nhân và tập thể.'
  },
  {
    id: 'tl-7',
    title: 'Thời kỳ quá độ',
    description: 'Tiến thẳng lên CNXH',
    detail: 'Việt Nam đi lên CNXH từ nước nông nghiệp lạc hậu, không qua giai đoạn TBCN - thời kỳ phức tạp, lâu dài.'
  },
  {
    id: 'tl-8',
    title: 'Mối quan hệ cốt lõi',
    description: 'Độc lập dân tộc gắn với CNXH',
    detail: 'Độc lập dân tộc là tiền đề, CNXH là bảo chứng bền vững - sợi chỉ đỏ xuyên suốt.'
  },
  {
    id: 'tl-9',
    title: 'Vận dụng đổi mới',
    description: 'Dân biết, dân bàn, dân làm, dân kiểm tra',
    detail: 'Phát huy dân chủ, chỉnh đốn Đảng, đào tạo con người mới có năng lực và đạo đức.'
  }
];

// Mind Map structure
export const mindMapData: MindMapNode = {
  id: 'root',
  label: 'Tư tưởng HCM về CNXH',
  description: 'Tư tưởng Hồ Chí Minh về Chủ nghĩa Xã hội và Con đường Quá độ tại Việt Nam',
  color: '#DA251D',
  children: [
    {
      id: 'concept',
      label: 'I. Quan niệm tổng quát',
      description: 'Mục tiêu nhân văn: Dân giàu, nước mạnh',
      color: '#FFCD00',
      children: [
        {
          id: 'concept-1',
          label: 'Mục tiêu cốt lõi',
          description: 'Ấm no, tự do, hạnh phúc cho nhân dân'
        },
        {
          id: 'concept-2',
          label: 'Bản chất khác biệt',
          description: 'Nhân dân lao động làm chủ'
        }
      ]
    },
    {
      id: 'features',
      label: 'II. Đặc trưng cơ bản',
      description: '4 đặc trưng lớn của xã hội XHCN',
      color: '#FFD700',
      children: [
        {
          id: 'feature-1',
          label: 'Chính trị',
          description: 'Dân chủ thực sự'
        },
        {
          id: 'feature-2',
          label: 'Kinh tế',
          description: 'LLSX hiện đại, công hữu'
        },
        {
          id: 'feature-3',
          label: 'Văn hóa',
          description: 'Công bằng, không bóc lột'
        },
        {
          id: 'feature-4',
          label: 'Chủ thể',
          description: 'Nhân dân + Đảng lãnh đạo'
        }
      ]
    },
    {
      id: 'goals',
      label: 'III. Mục tiêu & Động lực',
      description: 'Mục tiêu cụ thể và hệ thống động lực',
      color: '#8B0000',
      children: [
        {
          id: 'goal-1',
          label: 'Chính trị',
          description: 'Dân làm chủ, tự do ngôn luận'
        },
        {
          id: 'goal-2',
          label: 'Kinh tế',
          description: 'CN-NN hiện đại, HTX'
        },
        {
          id: 'goal-3',
          label: 'Động lực',
          description: 'Đoàn kết + Con người XHCN'
        }
      ]
    },
    {
      id: 'transition',
      label: 'IV. Thời kỳ quá độ',
      description: 'Đặc thù Việt Nam đi lên CNXH',
      color: '#DA251D',
      children: [
        {
          id: 'trans-1',
          label: 'Tính chất',
          description: 'Phức tạp, lâu dài, gian khổ'
        },
        {
          id: 'trans-2',
          label: 'Nguyên tắc',
          description: 'Mác-Lênin, độc lập, đoàn kết'
        }
      ]
    },
    {
      id: 'relation',
      label: 'V. ĐLDT - CNXH',
      description: 'Mối quan hệ biện chứng cốt lõi',
      color: '#FFCD00',
      children: [
        {
          id: 'rel-1',
          label: 'ĐLDT là tiền đề',
          description: 'Giải phóng dân tộc trước'
        },
        {
          id: 'rel-2',
          label: 'CNXH là bảo chứng',
          description: 'Đảm bảo độc lập bền vững'
        }
      ]
    },
    {
      id: 'apply',
      label: 'VI. Vận dụng đổi mới',
      description: 'Áp dụng trong bối cảnh hiện nay',
      color: '#FFD700',
      children: [
        {
          id: 'apply-1',
          label: 'Phát huy dân chủ',
          description: '4 dân: biết, bàn, làm, kiểm tra'
        },
        {
          id: 'apply-2',
          label: 'Chỉnh đốn Đảng',
          description: 'Chống suy thoái, tự chuyển hóa'
        },
        {
          id: 'apply-3',
          label: 'Đào tạo con người',
          description: 'Tri thức + Đạo đức cách mạng'
        }
      ]
    }
  ]
};

