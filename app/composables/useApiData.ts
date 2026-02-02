import axios from "axios"
import type Union from "../../types/union"
import type ApiError from "../../types/api-error"

const API_URL = "https://v1.data.uccf.io/api/christian-unions/expand"

export default async function fetchUnions() {
    try {
        const response = await axios.get<Union[]>(API_URL)

        if (!response.data) {
            const api_error: ApiError = {
                success: false,
                error: 'No data found'
            }
            return api_error
        }

        const data = response.data
        return data
        //
    } catch (error) {
        const api_error: ApiError = {
            'success': false,
            error: error
        }
        return api_error
    }
}
