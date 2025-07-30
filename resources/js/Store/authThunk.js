import { createAsyncThunk } from "@reduxjs/toolkit";

//rejectWithValue è un fx default di createAsyncThunk per gestire castum gli errori nei thunk.
const fetchSession = createAsyncThunk("session", async (remember, { rejectWithValue }) => {
    try {
        const response = await fetch('http://localhost:8000/session', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
            },
        });

        const data = await response.json();

        if (!response.ok) {
            return rejectWithValue({
                message: data.message || 'Errore del server',
                status: response.status,
                statusText: response.statusText
            });
        }

        data['remember'] = remember;
        return data

    } catch (error) {
        return rejectWithValue({
            message: 'Errore di connessione',
            type: 'NETWORK_ERROR',
            originalError: error.message
        });
    }
});

export { fetchSession };
