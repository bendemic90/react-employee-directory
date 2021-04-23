import axios from "axios"

export default API; {
    getEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=10")
    }
}
