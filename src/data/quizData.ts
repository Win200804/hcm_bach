// ============================================
// 25 Câu hỏi Quiz về Tư tưởng Hồ Chí Minh
// về CNXH và Con đường quá độ tại Việt Nam
// ============================================

import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ========== PHẦN 1: Quan niệm về CNXH (5 câu) ==========
  {
    id: 1,
    question: 'Theo Hồ Chí Minh, mục tiêu cốt lõi của Chủ nghĩa xã hội là gì?',
    options: [
      'Phát triển kinh tế vượt bậc',
      'Làm cho dân giàu, nước mạnh, mang lại ấm no, tự do, hạnh phúc cho nhân dân',
      'Xây dựng quân đội hùng mạnh',
      'Mở rộng quan hệ quốc tế'
    ],
    correctAnswer: 1,
    explanation: 'Hồ Chí Minh khái quát mục tiêu xây dựng CNXH bằng cụm từ "Làm sao cho dân giàu, nước mạnh", với mục tiêu tối thượng là mang lại cuộc sống ấm no, tự do và hạnh phúc cho toàn thể nhân dân.',
    section: 'Quan niệm tổng quát về CNXH'
  },
  {
    id: 2,
    question: 'Đặc điểm nổi bật trong cách tiếp cận khái niệm CNXH của Hồ Chí Minh là gì?',
    options: [
      'Mang tính giáo điều, cứng nhắc',
      'Sao chép nguyên mẫu từ Liên Xô',
      'Dung dị, dễ hiểu nhưng sâu sắc, tập trung vào con người',
      'Hoàn toàn mới, không dựa trên lý luận Mác-Lênin'
    ],
    correctAnswer: 2,
    explanation: 'Hồ Chí Minh không để lại định nghĩa giáo điều về CNXH mà tiếp cận thông qua những cách diễn đạt dung dị, dễ hiểu nhưng vô cùng sâu sắc, tập trung vào mục tiêu phục vụ con người.',
    section: 'Quan niệm tổng quát về CNXH'
  },
  {
    id: 3,
    question: 'Theo Hồ Chí Minh, CNXH khác với các chế độ cũ ở điểm căn bản nào?',
    options: [
      'Có nhiều tài nguyên thiên nhiên hơn',
      'Do nhân dân lao động làm chủ, không có sự bóc lột',
      'Có công nghệ tiên tiến hơn',
      'Có nhiều đảng phái chính trị'
    ],
    correctAnswer: 1,
    explanation: 'Khác với các chế độ cũ nơi lợi ích của giai cấp thống trị được thỏa mãn dựa trên sự áp bức, CNXH là chế độ do nhân dân lao động làm chủ, không còn vết tích bóc lột.',
    section: 'Quan niệm tổng quát về CNXH'
  },
  {
    id: 4,
    question: 'Trong quan niệm của Hồ Chí Minh, mối quan hệ giữa CNXH và Cộng sản chủ nghĩa là gì?',
    options: [
      'Hai hình thái xã hội hoàn toàn khác nhau',
      'CNXH là giai đoạn cao hơn CSCN',
      'Là các giai đoạn phát triển khác nhau của cùng một hình thái xã hội',
      'Không có mối quan hệ với nhau'
    ],
    correctAnswer: 2,
    explanation: 'CNXH và Cộng sản chủ nghĩa là những giai đoạn phát triển khác nhau của cùng một hình thái xã hội, nơi sức sản xuất phát triển cao và không còn vết tích bóc lột.',
    section: 'Quan niệm tổng quát về CNXH'
  },
  {
    id: 5,
    question: 'CNXH theo Hồ Chí Minh trước hết nhằm giúp nhân dân lao động điều gì?',
    options: [
      'Có quyền lực chính trị',
      'Thoát khỏi nạn bần cùng, có công ăn việc làm',
      'Được du lịch nước ngoài',
      'Có nhà ở riêng'
    ],
    correctAnswer: 1,
    explanation: 'CNXH trước hết nhằm làm cho nhân dân lao động thoát khỏi nạn bần cùng, đảm bảo mọi người đều có công ăn việc làm.',
    section: 'Quan niệm tổng quát về CNXH'
  },

  // ========== PHẦN 2: Đặc trưng cơ bản (5 câu) ==========
  {
    id: 6,
    question: 'Đặc trưng về chính trị của xã hội XHCN theo Hồ Chí Minh là gì?',
    options: [
      'Chế độ quân chủ lập hiến',
      'Chế độ dân chủ thực sự, nhân dân là chủ và làm chủ',
      'Chế độ đa đảng',
      'Chế độ phong kiến'
    ],
    correctAnswer: 1,
    explanation: 'Đặc trưng chính trị của CNXH là chế độ dân chủ thực sự, trong đó nhân dân là chủ và làm chủ dưới sự lãnh đạo của Đảng Cộng sản trên nền tảng liên minh công - nông.',
    section: 'Đặc trưng cơ bản của xã hội XHCN'
  },
  {
    id: 7,
    question: 'Đặc trưng kinh tế cốt lõi của xã hội XHCN là gì?',
    options: [
      'Kinh tế tư nhân chiếm ưu thế',
      'Chế độ sở hữu công cộng (công hữu) về tư liệu sản xuất chủ yếu',
      'Không có sở hữu',
      'Chỉ có sở hữu nhà nước'
    ],
    correctAnswer: 1,
    explanation: 'Chế độ sở hữu công cộng (công hữu) về tư liệu sản xuất chủ yếu là đặc trưng kinh tế cốt lõi của xã hội XHCN theo tư tưởng Hồ Chí Minh.',
    section: 'Đặc trưng cơ bản của xã hội XHCN'
  },
  {
    id: 8,
    question: 'Lực lượng sản xuất hiện đại trong xã hội XHCN biểu hiện qua những yếu tố nào?',
    options: [
      'Chỉ có máy móc công nghiệp',
      'Công cụ lao động, máy móc, sức điện và sức nguyên tử',
      'Chỉ có sức lao động con người',
      'Chỉ có nông nghiệp truyền thống'
    ],
    correctAnswer: 1,
    explanation: 'Lực lượng sản xuất hiện đại biểu hiện qua sự phát triển của công cụ lao động, máy móc, sức điện và sức nguyên tử.',
    section: 'Đặc trưng cơ bản của xã hội XHCN'
  },
  {
    id: 9,
    question: 'Đặc trưng về văn hóa - đạo đức của xã hội XHCN bao gồm những nội dung gì?',
    options: [
      'Chỉ quan tâm phát triển kinh tế',
      'Văn hóa đạo đức cao, xóa bỏ bóc lột, công bằng, các dân tộc đoàn kết',
      'Mỗi người tự lo cho bản thân',
      'Ưu tiên văn hóa nước ngoài'
    ],
    correctAnswer: 1,
    explanation: 'Xã hội XHCN có trình độ văn hóa và đạo đức phát triển cao, xóa bỏ bóc lột, con người được tôn trọng bình đẳng, các dân tộc đoàn kết gắn bó.',
    section: 'Đặc trưng cơ bản của xã hội XHCN'
  },
  {
    id: 10,
    question: 'Theo Hồ Chí Minh, nhân tố quyết định thành công trong xây dựng CNXH là gì?',
    options: [
      'Có nhiều tiền',
      'Có công nghệ hiện đại nhất',
      'Sự lãnh đạo của Đảng cách mạng chân chính, tận tâm phục vụ nhân dân',
      'Có sự giúp đỡ từ nước ngoài'
    ],
    correctAnswer: 2,
    explanation: 'CNXH là công trình tập thể của nhân dân dưới sự lãnh đạo của Đảng. Sự lãnh đạo của Đảng cách mạng chân chính, tận tâm phục vụ nhân dân là nhân tố quyết định thành công.',
    section: 'Đặc trưng cơ bản của xã hội XHCN'
  },

  // ========== PHẦN 3: Mục tiêu và động lực (5 câu) ==========
  {
    id: 11,
    question: 'Mục tiêu chính trị trong xây dựng CNXH theo Hồ Chí Minh là gì?',
    options: [
      'Xây dựng chế độ độc tài',
      'Xây dựng chế độ "dân làm chủ" với quyền bầu cử, ứng cử, tự do ngôn luận',
      'Xây dựng chế độ quân chủ',
      'Không có mục tiêu chính trị cụ thể'
    ],
    correctAnswer: 1,
    explanation: 'Mục tiêu chính trị là xây dựng chế độ "dân làm chủ", nơi nhân dân thực hiện quyền bầu cử, ứng cử và có quyền tự do ngôn luận, hội họp.',
    section: 'Mục tiêu và động lực phát triển CNXH'
  },
  {
    id: 12,
    question: 'Trong hệ thống động lực phát triển CNXH, Hồ Chí Minh xác định lực lượng mạnh nhất là gì?',
    options: [
      'Quân đội',
      'Trí thức',
      'Sức mạnh đoàn kết toàn dân',
      'Công nhân'
    ],
    correctAnswer: 2,
    explanation: 'Hồ Chí Minh khẳng định sức mạnh đoàn kết toàn dân là lực lượng mạnh nhất trong mọi lực lượng.',
    section: 'Mục tiêu và động lực phát triển CNXH'
  },
  {
    id: 13,
    question: 'Theo Hồ Chí Minh, muốn xây dựng CNXH trước hết cần có điều gì?',
    options: [
      'Có nhiều tiền vốn',
      'Có "con người xã hội chủ nghĩa" - người có đạo đức, ý thức làm chủ',
      'Có công nghệ tiên tiến nhất',
      'Có sự giúp đỡ quốc tế'
    ],
    correctAnswer: 1,
    explanation: 'Muốn xây dựng CNXH trước hết cần có "con người xã hội chủ nghĩa" - những người có đạo đức, ý thức làm chủ, tinh thần tập thể và chống lại chủ nghĩa cá nhân.',
    section: 'Mục tiêu và động lực phát triển CNXH'
  },
  {
    id: 14,
    question: 'Mục tiêu kinh tế trong xây dựng CNXH bao gồm những nội dung nào?',
    options: [
      'Chỉ phát triển nông nghiệp',
      'Công nghiệp và nông nghiệp hiện đại, khoa học kỹ thuật tiên tiến, kinh tế quốc doanh lãnh đạo',
      'Chỉ phát triển thương mại',
      'Không quan tâm kinh tế'
    ],
    correctAnswer: 1,
    explanation: 'Mục tiêu kinh tế là xây dựng nền kinh tế với công nghiệp và nông nghiệp hiện đại, khoa học kỹ thuật tiên tiến, kinh tế quốc doanh phải lãnh đạo và ưu tiên phát triển kinh tế hợp tác xã.',
    section: 'Mục tiêu và động lực phát triển CNXH'
  },
  {
    id: 15,
    question: 'Hồ Chí Minh đề cập đến lợi ích cá nhân như thế nào trong xây dựng CNXH?',
    options: [
      'Hoàn toàn bỏ qua lợi ích cá nhân',
      'Chỉ quan tâm lợi ích tập thể',
      'Phải thỏa mãn lợi ích cá nhân chính đáng để mỗi người phát huy sở trường',
      'Lợi ích cá nhân là quan trọng nhất'
    ],
    correctAnswer: 2,
    explanation: 'Phải chú ý xem xét và thỏa mãn lợi ích cá nhân đúng đắn để mỗi người có điều kiện cải thiện đời sống riêng, phát huy sở trường cá nhân.',
    section: 'Mục tiêu và động lực phát triển CNXH'
  },

  // ========== PHẦN 4: Thời kỳ quá độ (5 câu) ==========
  {
    id: 16,
    question: 'Đặc điểm lớn nhất của thời kỳ quá độ lên CNXH ở Việt Nam là gì?',
    options: [
      'Trải qua giai đoạn TBCN trước',
      'Tiến thẳng lên CNXH từ nước nông nghiệp lạc hậu, không qua giai đoạn TBCN',
      'Được các nước giúp đỡ hoàn toàn',
      'Không có đặc điểm riêng'
    ],
    correctAnswer: 1,
    explanation: 'Đặc điểm lớn nhất là Việt Nam tiến thẳng lên CNXH từ một nước nông nghiệp lạc hậu, không trải qua giai đoạn phát triển tư bản chủ nghĩa.',
    section: 'Thời kỳ quá độ lên CNXH tại Việt Nam'
  },
  {
    id: 17,
    question: 'Tính chất của thời kỳ quá độ lên CNXH theo Hồ Chí Minh là gì?',
    options: [
      'Ngắn gọn và đơn giản',
      'Cải biến sâu sắc nhất nhưng phức tạp, lâu dài và gian khổ nhất',
      'Không có gì đặc biệt',
      'Hoàn toàn giống các nước khác'
    ],
    correctAnswer: 1,
    explanation: 'Đây là thời kỳ cải biến sâu sắc nhất nhưng cũng phức tạp, lâu dài và gian khổ nhất trong lịch sử.',
    section: 'Thời kỳ quá độ lên CNXH tại Việt Nam'
  },
  {
    id: 18,
    question: 'Nền tảng lý luận cho mọi tư tưởng và hành động trong thời kỳ quá độ là gì?',
    options: [
      'Tư tưởng phong kiến',
      'Chủ nghĩa tư bản',
      'Chủ nghĩa Mác - Lênin',
      'Tư tưởng tôn giáo'
    ],
    correctAnswer: 2,
    explanation: 'Mọi tư tưởng và hành động phải dựa trên chủ nghĩa Mác - Lênin - đây là nền tảng lý luận cơ bản.',
    section: 'Thời kỳ quá độ lên CNXH tại Việt Nam'
  },
  {
    id: 19,
    question: 'Nguyên tắc "Xây đi đôi với Chống" trong thời kỳ quá độ có nghĩa là gì?',
    options: [
      'Chỉ xây dựng, không cần chống',
      'Chỉ chống, không cần xây dựng',
      'Vừa xây dựng yếu tố mới, vừa chống lực lượng phá hoại và căn bệnh nội bộ',
      'Không làm gì cả'
    ],
    correctAnswer: 2,
    explanation: 'Nguyên tắc này có nghĩa vừa xây dựng các yếu tố mới, vừa phải quyết liệt chống lại các lực lượng phá hoại và các căn bệnh nội bộ như tham ô, lãng phí.',
    section: 'Thời kỳ quá độ lên CNXH tại Việt Nam'
  },
  {
    id: 20,
    question: 'Theo Hồ Chí Minh, khi học tập kinh nghiệm từ các nước anh em cần lưu ý điều gì?',
    options: [
      'Sao chép nguyên bản',
      'Vận dụng sáng tạo, không được áp đặt máy móc',
      'Không học tập ai',
      'Chỉ học lý thuyết'
    ],
    correctAnswer: 1,
    explanation: 'Học tập kinh nghiệm từ các nước anh em nhưng phải vận dụng sáng tạo, không được áp đặt máy móc.',
    section: 'Thời kỳ quá độ lên CNXH tại Việt Nam'
  },

  // ========== PHẦN 5: Mối quan hệ ĐLDT - CNXH (3 câu) ==========
  {
    id: 21,
    question: 'Mối quan hệ giữa độc lập dân tộc và CNXH được Hồ Chí Minh xem là gì?',
    options: [
      'Hai vấn đề tách biệt',
      'Sợi chỉ đỏ xuyên suốt tư tưởng của Người',
      'Không có mối quan hệ',
      'Mâu thuẫn với nhau'
    ],
    correctAnswer: 1,
    explanation: 'Mối quan hệ giữa độc lập dân tộc và CNXH là sợi chỉ đỏ xuyên suốt tư tưởng Hồ Chí Minh.',
    section: 'Mối quan hệ ĐLDT và CNXH'
  },
  {
    id: 22,
    question: 'Trong mối quan hệ ĐLDT - CNXH, độc lập dân tộc đóng vai trò gì?',
    options: [
      'Là kết quả cuối cùng',
      'Là tiền đề, mục tiêu đầu tiên tạo sức mạnh tiến tới CNXH',
      'Không quan trọng',
      'Có thể bỏ qua'
    ],
    correctAnswer: 1,
    explanation: 'Độc lập dân tộc là tiền đề: Giải phóng dân tộc là mục tiêu đầu tiên, tạo ra sức mạnh để tiến tới CNXH.',
    section: 'Mối quan hệ ĐLDT và CNXH'
  },
  {
    id: 23,
    question: 'Tại sao Hồ Chí Minh khẳng định "Chỉ có CNXH mới giải phóng hoàn toàn dân tộc"?',
    options: [
      'Vì CNXH có nhiều tiền',
      'Vì CNXH đảm bảo nền độc lập vững chắc, không để đất nước nô lệ một lần nữa',
      'Vì CNXH có quân đội mạnh',
      'Vì CNXH được quốc tế công nhận'
    ],
    correctAnswer: 1,
    explanation: 'CNXH là bảo chứng bền vững vì chỉ có CNXH mới giải phóng hoàn toàn dân tộc và đảm bảo nền độc lập vững chắc, không để đất nước rơi vào cảnh nô lệ một lần nữa.',
    section: 'Mối quan hệ ĐLDT và CNXH'
  },

  // ========== PHẦN 6: Vận dụng trong đổi mới (2 câu) ==========
  {
    id: 24,
    question: 'Cơ chế "dân biết, dân bàn, dân làm, dân kiểm tra" nhằm mục đích gì?',
    options: [
      'Kiểm soát nhân dân',
      'Để người dân thực sự tham gia quản lý xã hội, phát huy dân chủ',
      'Chỉ để hình thức',
      'Để giảm quyền lực nhà nước'
    ],
    correctAnswer: 1,
    explanation: 'Cơ chế "dân biết, dân bàn, dân làm, dân kiểm tra" nhằm thực hiện tốt để người dân thực sự tham gia quản lý xã hội, phát huy dân chủ.',
    section: 'Vận dụng trong sự nghiệp đổi mới'
  },
  {
    id: 25,
    question: 'Trong công tác chỉnh đốn Đảng hiện nay, cần đấu tranh chống những biểu hiện nào?',
    options: [
      'Chỉ chống tham nhũng',
      'Suy thoái tư tưởng, đạo đức và "tự diễn biến", "tự chuyển hóa"',
      'Không cần chống gì',
      'Chỉ chống những người khác đảng'
    ],
    correctAnswer: 1,
    explanation: 'Chỉnh đốn Đảng cần đấu tranh chống suy thoái tư tưởng, đạo đức và các biểu hiện "tự diễn biến", "tự chuyển hóa".',
    section: 'Vận dụng trong sự nghiệp đổi mới'
  }
];

// Hàm lấy câu hỏi theo section
export const getQuestionsBySection = (section: string): QuizQuestion[] => {
  return quizQuestions.filter(q => q.section === section);
};

// Hàm xáo trộn câu hỏi
export const shuffleQuestions = (questions: QuizQuestion[]): QuizQuestion[] => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Danh sách các section
export const quizSections = [
  'Quan niệm tổng quát về CNXH',
  'Đặc trưng cơ bản của xã hội XHCN',
  'Mục tiêu và động lực phát triển CNXH',
  'Thời kỳ quá độ lên CNXH tại Việt Nam',
  'Mối quan hệ ĐLDT và CNXH',
  'Vận dụng trong sự nghiệp đổi mới'
];

