import type Institution from './institution'

export default interface Union {
    id: number;
    name: string;
    full_name: string;
    campus: string | null;
    abbreviation: string | null;
    url: string | null;
    website: string | null;
    facebook: string | null;
    twitter: string | null;
    instagram: string | null;
    institutions: Institution[]
}