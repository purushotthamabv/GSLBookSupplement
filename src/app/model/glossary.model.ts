export interface GlossaryItem {
    title: string;
    description: string;
}

export interface GlossaryEntry {
    image: string;
    title: string;
    glossary: GlossaryItem[];
    chapter?: number;   // optional if dynamic
    qr_code?: string;   // optional if dynamic
}