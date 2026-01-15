// ============================================
// 25 Câu hỏi Quiz về Tư tưởng Hồ Chí Minh
// về CNXH và Con đường quá độ tại Việt Nam
// ============================================

import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // ========== PHẦN 1: Quan niệm về CNXH (5 câu) ==========
{
  id: 1,
  question: 'Theo tư tưởng Hồ Chí Minh, CNXH trước hết nhằm giải quyết vấn đề gì cho nhân dân?',
  options: [
    'Thoát khỏi bần cùng, có việc làm ổn định',
    'Mở rộng quan hệ đối ngoại',
    'Phát triển khoa học quân sự',
    'Tăng cường quản lý nhà nước'
  ],
  correctAnswer: 0,
  explanation: 'Hồ Chí Minh nhấn mạnh CNXH trước hết phải làm cho nhân dân lao động thoát khỏi nạn bần cùng và có công ăn việc làm.',
  section: 'Quan niệm tổng quát về CNXH'
},
{
  id: 2,
  question: 'Cách tiếp cận CNXH của Hồ Chí Minh có đặc điểm nổi bật nào?',
  options: [
    'Giáo điều, thiên về lý luận trừu tượng',
    'Dung dị, dễ hiểu, gắn với con người',
    'Hoàn toàn sao chép mô hình nước ngoài',
    'Chỉ nhấn mạnh yếu tố kinh tế'
  ],
  correctAnswer: 1,
  explanation: 'Người không đưa ra định nghĩa cứng nhắc mà diễn đạt CNXH bằng những cách nói giản dị, dễ hiểu, lấy con người làm trung tâm.',
  section: 'Quan niệm tổng quát về CNXH'
},
{
  id: 3,
  question: 'Theo Hồ Chí Minh, điểm khác biệt căn bản của CNXH so với các chế độ cũ là gì?',
  options: [
    'Có trình độ khoa học cao',
    'Có nền kinh tế phát triển nhanh',
    'Do nhân dân lao động làm chủ',
    'Có hệ thống pháp luật chặt chẽ'
  ],
  correctAnswer: 2,
  explanation: 'CNXH khác về bản chất khi quyền làm chủ thuộc về nhân dân lao động, không còn sự áp bức bóc lột.',
  section: 'Quan niệm tổng quát về CNXH'
},
{
  id: 4,
  question: 'Theo tư tưởng Hồ Chí Minh, mối quan hệ giữa CNXH và CNCS được hiểu như thế nào?',
  options: [
    'Hai hình thái xã hội đối lập',
    'Không liên quan đến nhau',
    'CNCS tách rời CNXH',
    'Là các giai đoạn của cùng một hình thái xã hội'
  ],
  correctAnswer: 3,
  explanation: 'CNXH và CNCS là những giai đoạn phát triển khác nhau của cùng một hình thái xã hội.',
  section: 'Quan niệm tổng quát về CNXH'
},
{
  id: 5,
  question: 'Mục tiêu tổng quát được Hồ Chí Minh khái quát khi nói về CNXH là gì?',
  options: [
    'Xây dựng xã hội hiện đại',
    'Làm cho dân giàu, nước mạnh',
    'Phát triển công nghiệp nặng',
    'Tăng trưởng kinh tế nhanh'
  ],
  correctAnswer: 1,
  explanation: 'Người khái quát mục tiêu CNXH bằng cụm từ chiến lược “dân giàu, nước mạnh”.',
  section: 'Quan niệm tổng quát về CNXH'
},

// ========== PHẦN 2: Đặc trưng cơ bản (5 câu) ==========
{
  id: 6,
  question: 'Đặc trưng chính trị cơ bản của xã hội XHCN theo Hồ Chí Minh là gì?',
  options: [
    'Chế độ đa đảng',
    'Chế độ dân chủ thực sự',
    'Chế độ quân chủ',
    'Chế độ pháp quyền thuần túy'
  ],
  correctAnswer: 1,
  explanation: 'CNXH là xã hội có chế độ dân chủ thực sự, trong đó nhân dân là chủ và làm chủ.',
  section: 'Đặc trưng cơ bản của xã hội XHCN'
},
{
  id: 7,
  question: 'Đặc trưng kinh tế cốt lõi của xã hội XHCN là gì?',
  options: [
    'Sở hữu tư nhân chiếm ưu thế',
    'Không tồn tại sở hữu',
    'Sở hữu công cộng về tư liệu sản xuất chủ yếu',
    'Chỉ tồn tại sở hữu nhà nước'
  ],
  correctAnswer: 2,
  explanation: 'Sở hữu công cộng về tư liệu sản xuất chủ yếu là đặc trưng kinh tế nền tảng của CNXH.',
  section: 'Đặc trưng cơ bản của xã hội XHCN'
},
{
  id: 8,
  question: 'Lực lượng sản xuất hiện đại trong xã hội XHCN thể hiện qua yếu tố nào?',
  options: [
    'Kinh nghiệm sản xuất thủ công',
    'Sự phát triển của công cụ và máy móc',
    'Chỉ dựa vào lao động giản đơn',
    'Sản xuất nhỏ lẻ'
  ],
  correctAnswer: 1,
  explanation: 'Lực lượng sản xuất hiện đại thể hiện qua sự phát triển của công cụ lao động, máy móc, điện và năng lượng mới.',
  section: 'Đặc trưng cơ bản của xã hội XHCN'
},
{
  id: 9,
  question: 'Đặc trưng về văn hóa – đạo đức của xã hội XHCN là gì?',
  options: [
    'Chạy theo lợi ích vật chất',
    'Đề cao cạnh tranh cá nhân',
    'Ưu tiên văn hóa ngoại lai',
    'Văn hóa, đạo đức phát triển cao, công bằng'
  ],
  correctAnswer: 3,
  explanation: 'Xã hội XHCN có trình độ văn hóa và đạo đức cao, đảm bảo công bằng và bình đẳng.',
  section: 'Đặc trưng cơ bản của xã hội XHCN'
},
{
  id: 10,
  question: 'Ai là chủ thể xây dựng CNXH theo tư tưởng Hồ Chí Minh?',
  options: [
    'Nhà nước',
    'Đảng Cộng sản',
    'Nhân dân dưới sự lãnh đạo của Đảng',
    'Tầng lớp trí thức'
  ],
  correctAnswer: 2,
  explanation: 'CNXH là công trình tập thể của nhân dân, do nhân dân xây dựng dưới sự lãnh đạo của Đảng.',
  section: 'Đặc trưng cơ bản của xã hội XHCN'
},

// ========== PHẦN 3: Mục tiêu và động lực (5 câu) ==========
{
  id: 11,
  question: 'Mục tiêu chính trị của CNXH theo Hồ Chí Minh là gì?',
  options: [
    'Dân làm chủ',
    'Tập trung quyền lực',
    'Ổn định bộ máy',
    'Mở rộng lãnh thổ'
  ],
  correctAnswer: 0,
  explanation: 'Mục tiêu chính trị là xây dựng chế độ dân làm chủ.',
  section: 'Mục tiêu và động lực phát triển CNXH'
},
{
  id: 12,
  question: 'Động lực mạnh nhất của CNXH theo Hồ Chí Minh là gì?',
  options: [
    'Sức mạnh đoàn kết toàn dân',
    'Nguồn vốn đầu tư',
    'Khoa học công nghệ',
    'Quân đội'
  ],
  correctAnswer: 0,
  explanation: 'Người khẳng định đoàn kết toàn dân là lực lượng mạnh nhất.',
  section: 'Mục tiêu và động lực phát triển CNXH'
},
{
  id: 13,
  question: 'Yếu tố con người trong xây dựng CNXH được Hồ Chí Minh nhấn mạnh như thế nào?',
  options: [
    'Chỉ cần trình độ chuyên môn',
    'Chỉ cần trung thành chính trị',
    'Cần con người XHCN có đạo đức',
    'Chỉ cần tinh thần lao động'
  ],
  correctAnswer: 2,
  explanation: 'Muốn xây dựng CNXH phải có con người XHCN có đạo đức và ý thức làm chủ.',
  section: 'Mục tiêu và động lực phát triển CNXH'
},
{
  id: 14,
  question: 'Mục tiêu kinh tế của CNXH theo Hồ Chí Minh là gì?',
  options: [
    'Phát triển dịch vụ',
    'Công nghiệp và nông nghiệp hiện đại',
    'Kinh tế thị trường tự do',
    'Sản xuất nhỏ'
  ],
  correctAnswer: 1,
  explanation: 'Người xác định xây dựng công nghiệp và nông nghiệp hiện đại.',
  section: 'Mục tiêu và động lực phát triển CNXH'
},
{
  id: 15,
  question: 'Hồ Chí Minh nhìn nhận lợi ích cá nhân trong CNXH như thế nào?',
  options: [
    'Phải loại bỏ',
    'Không cần quan tâm',
    'Chỉ phục vụ tập thể',
    'Tôn trọng lợi ích cá nhân chính đáng'
  ],
  correctAnswer: 3,
  explanation: 'Người cho rằng cần tôn trọng và thỏa mãn lợi ích cá nhân chính đáng.',
  section: 'Mục tiêu và động lực phát triển CNXH'
},

// ========== PHẦN 4: Thời kỳ quá độ (5 câu) ==========
{
  id: 16,
  question: 'Đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam là gì?',
  options: [
    'Đi từ nước nông nghiệp lạc hậu lên CNXH',
    'Trải qua CNTB',
    'Có sẵn cơ sở vật chất',
    'Được quốc tế hỗ trợ hoàn toàn'
  ],
  correctAnswer: 0,
  explanation: 'Việt Nam tiến thẳng lên CNXH từ một nước nông nghiệp lạc hậu.',
  section: 'Thời kỳ quá độ lên CNXH tại Việt Nam'
},
{
  id: 17,
  question: 'Tính chất của thời kỳ quá độ theo Hồ Chí Minh là gì?',
  options: [
    'Ngắn và thuận lợi',
    'Phức tạp, lâu dài và gian khổ',
    'Nhanh chóng hoàn thành',
    'Ít biến động'
  ],
  correctAnswer: 1,
  explanation: 'Đây là thời kỳ cải biến sâu sắc, lâu dài và gian khổ.',
  section: 'Thời kỳ quá độ lên CNXH tại Việt Nam'
},
{
  id: 18,
  question: 'Nền tảng lý luận của thời kỳ quá độ là gì?',
  options: [
    'Chủ nghĩa tự do',
    'Tư tưởng dân tộc',
    'Chủ nghĩa Mác – Lênin',
    'Tư tưởng cải lương'
  ],
  correctAnswer: 2,
  explanation: 'Mọi tư tưởng và hành động phải dựa trên chủ nghĩa Mác – Lênin.',
  section: 'Thời kỳ quá độ lên CNXH tại Việt Nam'
},
{
  id: 19,
  question: 'Nguyên tắc “Xây đi đôi với Chống” có ý nghĩa gì?',
  options: [
    'Chỉ chống tiêu cực',
    'Chỉ xây dựng mới',
    'Vừa xây dựng vừa đấu tranh',
    'Không can thiệp'
  ],
  correctAnswer: 2,
  explanation: 'Phải đồng thời xây dựng yếu tố mới và chống các lực lượng phá hoại.',
  section: 'Thời kỳ quá độ lên CNXH tại Việt Nam'
},
{
  id: 20,
  question: 'Khi học tập kinh nghiệm quốc tế cần lưu ý điều gì?',
  options: [
    'Sao chép nguyên mẫu',
    'Không học tập',
    'Chỉ học lý thuyết',
    'Vận dụng sáng tạo'
  ],
  correctAnswer: 3,
  explanation: 'Phải học tập có chọn lọc và vận dụng sáng tạo.',
  section: 'Thời kỳ quá độ lên CNXH tại Việt Nam'
},

// ========== PHẦN 5: Mối quan hệ ĐLDT - CNXH (3 câu) ==========
{
  id: 21,
  question: 'Mối quan hệ giữa ĐLDT và CNXH được Hồ Chí Minh ví như điều gì?',
  options: [
    'Hai con đường song song',
    'Sợi chỉ đỏ xuyên suốt',
    'Hai mục tiêu tách biệt',
    'Hai giai đoạn đối lập'
  ],
  correctAnswer: 1,
  explanation: 'Đây là sợi chỉ đỏ xuyên suốt tư tưởng Hồ Chí Minh.',
  section: 'Mối quan hệ ĐLDT và CNXH'
},
{
  id: 22,
  question: 'Độc lập dân tộc giữ vai trò gì trong tiến trình CNXH?',
  options: [
    'Kết quả cuối cùng',
    'Tiền đề để phát triển CNXH',
    'Không quan trọng',
    'Có thể thay thế'
  ],
  correctAnswer: 1,
  explanation: 'Độc lập dân tộc là tiền đề để tiến lên CNXH.',
  section: 'Mối quan hệ ĐLDT và CNXH'
},
{
  id: 23,
  question: 'Vì sao chỉ CNXH mới đảm bảo độc lập dân tộc bền vững?',
  options: [
    'Do tiềm lực quân sự',
    'Do sự ủng hộ quốc tế',
    'Do phát triển kinh tế',
    'Do giải phóng triệt để con người và xã hội'
  ],
  correctAnswer: 3,
  explanation: 'CNXH giải phóng triệt để dân tộc và con người.',
  section: 'Mối quan hệ ĐLDT và CNXH'
},

// ========== PHẦN 6: Vận dụng trong đổi mới (2 câu) ==========
{
  id: 24,
  question: 'Mục đích của cơ chế “dân biết, dân bàn, dân làm, dân kiểm tra” là gì?',
  options: [
    'Tăng quản lý',
    'Phát huy dân chủ',
    'Giảm trách nhiệm nhà nước',
    'Mang tính hình thức'
  ],
  correctAnswer: 1,
  explanation: 'Cơ chế này nhằm phát huy quyền làm chủ của nhân dân.',
  section: 'Vận dụng trong sự nghiệp đổi mới'
},
{
  id: 25,
  question: 'Nội dung trọng tâm trong chỉnh đốn Đảng hiện nay là gì?',
  options: [
    'Chống suy thoái tư tưởng, đạo đức',
    'Mở rộng tổ chức',
    'Tăng quyền lực',
    'Giảm kỷ luật'
  ],
  correctAnswer: 0,
  explanation: 'Cần đấu tranh chống suy thoái tư tưởng, đạo đức và tự diễn biến.',
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

