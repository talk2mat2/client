import axios from "axios";
const baseURL = "https://stage.api.sloovi.com/";
const access_token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTgzODA3MTgsIm5iZiI6MTY1ODM4MDcxOCwianRpIjoiZTUzMDEyMjAtYTY1MC00ZDZmLThkNzMtYzEwOGEwNDNjZGRlIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.Lnwqe-Z1nPr6bQcFTCbk-vo6tiI0sfQ1Kp8UaX68bC0";
const company_id = "company_413ef22b6237417fb1fba7917f0f69e7";
const user_id = "user_4ee4cf67ad474a27988bc0afb84cf472";

const instance = axios.create({
  baseURL,
  //   timeout: 10000,
  headers: {
    Authorization: "Bearer " + access_token,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default new (class Api {
  async login() {
    await axios
      .post(baseURL + "login")
      .then(function (response) {
        // handle success
        return response;
      })
      .catch(function (error) {
        // handle error
        throw error;
      });
  }

  async assignDropDown() {
    return await instance
      .get(`team?product=outreach&company_id=${company_id}`)
      .then(function (response) {
        // handle success

        return response.data;
      })
      .catch(function (error) {
        // handle error

        throw error;
      });
  }
  async getAllTask() {
    return await instance
      .get(
        `task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`
      )
      .then(function (response) {
        // // handle success

        return response.data;
      })
      .catch(function (error) {
        // // handle error

        throw error;
      });
  }
  async deleteAtask(task_id) {
    return await instance
      .delete(
        `task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task_id}?company_id=${company_id}`
      )
      .then(function (response) {
        // // handle success

        return response.data;
      })
      .catch(function (error) {
        // // handle error

        throw error;
      });
  }
  async addtask(body) {
    let data = JSON.stringify(body);
    return await instance
      .post(
        `task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`,
        data
      )
      .then(function (response) {
        // // handle success

        return response.data;
      })
      .catch(function (error) {
        // // handle error

        throw error;
      });
  }
  async updateAtask(body, task_id) {
    let data = JSON.stringify(body);
    return await instance
      .put(
        `task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task_id}?company_id=${company_id}`,
        data
      )
      .then(function (response) {
        // // handle success

        return response.data;
      })
      .catch(function (error) {
        // // handle error

        throw error;
      });
  }
//   async deleteAtask(task_id) {
//     return await instance
//       .delete(
//         `task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task_id}company_id=${company_id}`
//       )
//       .then(function (response) {
//         // // handle success

//         return response.data;
//       })
//       .catch(function (error) {
//         // // handle error

//         throw error;
//       });
//   }
})();
