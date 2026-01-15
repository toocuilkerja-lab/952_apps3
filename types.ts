
export type ServiceCategory = 'NPWP' | 'PKP' | 'e-Billing' | 'PBK';

export interface SubService {
  id: string;
  title: string;
  description?: string;
}

export interface MainService {
  id: ServiceCategory;
  title: string;
  icon: string;
  color: string;
  items: SubService[];
}

export type AppTab = 'Beranda' | 'Tutorial' | 'Chat' | 'Profil';
