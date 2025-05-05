// utils/studentUtils.ts
export const countStudentsByStatus = (students: { status: string }[]) => {
    return students.reduce((acc, student) => {
      acc[student.status] = (acc[student.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  };
  