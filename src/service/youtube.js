import axios from 'axios';

class Youtube {
    constructor(key) {
        //client
        this.youtube = axios.create({
            baseURL: 'https://youtube.googleapis.com/youtube/v3',
            params: { key: key }
        });
    }

    //가장 유행하는 동영상
    async mostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            },
        });
        return response.data.items;
    }

    //해당하는 query에 맞게 검색하는 아이
    async search(query) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: query,
            },
        });
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;