import { countStudentsByStatus } from '../utils/studentUtils';

describe('countStudentsByStatus', () => {
  it('should correctly count students by enrollment status', () => {
    const mockStudents = [
      { id: '1', status: 'Enrolled' },
      { id: '2', status: 'Graduated' },
      { id: '3', status: 'Enrolled' },
      { id: '4', status: 'Alumni' },
    ];

    const result = countStudentsByStatus(mockStudents);

    expect(result.Enrolled).toBe(2);
    expect(result.Graduated).toBe(1);
    expect(result.Alumni).toBe(1);
  });

  it('should return an empty object if no students provided', () => {
    const result = countStudentsByStatus([]);
    expect(result).toEqual({});
  });
});
