function filterLecturesByO(lecturesArray) {
    return lecturesArray.filter(topic => topic.startsWith("О"));
  }
  
  const lectures = ['Операционные системы', 'JavaScript', 'Оптимизация', 'ООП'];
  
  const filteredLectures = filterLecturesByO(lectures);
  console.log("Темы, начинающиеся с буквы 'О':", filteredLectures);