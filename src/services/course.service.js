import axios from 'axios';
import environment from "../../src/environment";



/**
 * Register a User.
 * @param userEmail email of the Faculty for which Courses are being fetched.
 * @returns {Promise<void>}
 */

export const getCoursesForFaculty = async (userEmail) => {
    /* API Call to get courses for the user  */
    console.log(environment.baseURL);
    return axios.get(`${environment.baseURL}/course/user/${userEmail}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            throw error;
        });
};

/**
 * Save Course.
 * @param course to be saved.
 * @returns {Promise<void>}
 */
export const saveCourse = async (course) => {
    /* API Call to get courses for the user  */
    /* API: Implementation */
    return axios.post(`${environment.baseURL}/course/`, course)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            throw error;
        });
};



export const getCourse = async (courseId) =>{
    return axios.get(`${environment.baseURL}/course/${courseId}`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            throw error;
        });
}

/**
 * Save Module For Course.
 * @param courseId courseId of the course.
 * @param module Module being saved.
 * @returns {Promise<void>}
 */
export const saveModule = async (courseId, module) => {
    /* API Call to get courses for the user  */
    /* API: Implementation */
    return axios.post(`${environment.baseURL}/course/${courseId}/module`, module)
        .then(function (response) {
            return response.data
        })
        .then(res=>{
            return getCourse(courseId);
        })
        .catch(function (error) {
            throw error;
        });
};

/**
 * Save E-Val For Course.
 * @param courseId courseId of the course.
 * @param evaluationComponent E-Val being saved.
 * @returns {Promise<void>}
 */
export const saveEvaluationComponent = async (courseId, evaluationComponent) => {
    /* API Call to get courses for the user  */
    /* API: Implementation */
    return axios.post(`${environment.baseURL}/course/${courseId}/e-val`, evaluationComponent)
        .then(function (response) {
            return response.data
        })
        .then(res=>{
            return getCourse(courseId);
        })
        .catch(function (error) {
            throw error;
        });
};

