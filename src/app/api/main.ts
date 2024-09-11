import type { AxiosInstance } from 'axios';
import { useInitDataStore } from '../stores/init-data/init-data.store';

export class MainApiImpl {
  constructor(private readonly api: AxiosInstance) {
    void (async () => {
      try {
        await this.init();
      } catch (e) {
        console.error(e);
      }
    })();
  }

  async init(): Promise<void> {
    const updateUser = useInitDataStore((state: any) => state.user);
    const { data } = await this.api.get('/me');
    const urlCreator = window.URL || window.webkitURL;
    const { data: profilePhoto } = await this.api.get<Blob>('/me/photo', { responseType: 'blob' });
    const imageUrl = urlCreator.createObjectURL(profilePhoto);
    updateUser({ ...data, photo_url: imageUrl });
  }

  async getUserProfile() {
    const { data } = await this.api.get('/me');
    return data;
  }
}