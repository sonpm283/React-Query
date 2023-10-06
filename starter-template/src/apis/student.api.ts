import { Student, Students } from 'types/student.type'
import http from 'utils/http'

export const getStudents = (page: number | string, limit: string | number) =>
  http.get<Students>('students', {
    params: {
      _page: page,
      _limit: limit
    }
  })

export const addStudent = (student: Omit<Student, 'id'>) => http.post<Student>('/students', student)

export const getStudent = (id: string | number) => http.get<Student>(`students/${id}`)

export const updateStudent = (id: string | number, student: Student) =>
  http.put<Student>(`students/${id}`, student)

export const deleteStudent = (id: string | number) => http.delete<{}>(`students/${id}`)
