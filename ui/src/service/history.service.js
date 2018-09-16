import Vue from 'vue'
import axios from 'axios'
import {HISTORY_API_URL} from '@/service/config.js'
import {POINT} from '@/service/config.js'
import JWTLoginService from "@/service/jwtLogin.service.js";

const HistoryApiService = {
    getAll(callback) {
        axios
            .get(HISTORY_API_URL)
            .then(function(response){
                callback(response,null)
            })
            .catch(function(error){
                callback(null,error)
            })
    },
    getHistory(memberId,callback) {
        axios
            .get(HISTORY_API_URL+"/filter?memberId="+memberId)
            .then(function(response){
                callback(response,null)
            })
            .catch(function(error){
                callback(null,error)
            })
    },
    save(memberId,callback) {
        var history = {
            memberId : memberId,
            point: POINT
        };
        axios
            .post(HISTORY_API_URL,history)
            .then(function(response){
                callback(response,null)
            })
            .catch(function(error){
                callback(null,error)
            })
    },
    prepareHeaders() {
        let axiosConfig = {
            headers: {
                'JWT_TOKEN': JWTLoginService.getJWTfromLocalStorage()
            }
        };
        return axiosConfig;
    }

}
export default HistoryApiService