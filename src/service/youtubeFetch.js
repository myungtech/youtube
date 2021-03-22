class YoutubeFetch {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

    }
    //가장 유행하는 동영상
    async mostPopular() {
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
            this.getRequestOptions
        );
        const result = await response.json();
        return result.items;
    }
    //해당하는 query에 맞게 검색하는 아이
    async search(query) {
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions
        );
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));

    }
}

export default Youtube;