import axios from "axios";

class AdminService{
    API_URL = "http://localhost:8080";
    token = localStorage.getItem('token');
    getTeacher(teacherId) {
		return axios.get(this.API_URL + `/admin/user/professor/${teacherId}`, this.config);
	}
    editTeacher(id, teacher) {
		return axios.put(this.API_URL + `/admin/user/professor/${id}`, teacher, this.config);
	}
  getStudent(studentId) {
		return axios.get(this.API_URL + `/admin/user/student/${studentId}`, this.config);
	}
  editStudent(id, student) {
		return axios.put(this.API_URL + `/admin/student/${id}`, student, this.config);
	}
	getTeachers() {
		return axios.get(this.API_URL + "/admin/user/professor", this.config);
	}
	deleteUser(id) {
		return axios.delete(this.API_URL + `/admin/user/${id}`, this.config);
	}




}
export default new AdminService();