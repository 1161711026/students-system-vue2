import axios from "axios";

export default{
    upLoadImages(data){
        return axios({
            url: '/images/uploadImages',
            method: 'POST',
            data
        })
    }
}