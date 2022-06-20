import { RaRecord, Identifier, List } from 'react-admin';

export type ThemeName = 'light' | 'dark';

export enum unitDict {
    G = "g",
    GCM = "g/cm",
    SZT = "szt.",
    GCM2 = "g/cm2",
    GCM3 = "g/cm3",
    GM = "g/m"
}

export const unitTypeArray = [
    { name: 'g',id:"G" },
    { name: 'g/cm',id:"GCM" },
    { name: 'szt.',id:"SZT" },
    { name: 'g/cm2',id:"GCM2" },
    { name: 'g/cm3',id:"GCM3" },
    { name: 'g/m',id:"GM" },
    
 ];

 export const roles = [
    { id: 'ADMIN', name: 'bis.roles.admin' },
    { id: 'INSTRUCTOR', name: 'bis.roles.instructor' },
    { id: 'USER', name: 'bis.roles.user' },
 ];

 export const explosiveUnitTypes = [
    { id: 'STANDARD', name: 'bis.explosive_unit.standard' },
    { id: 'EXOTIC', name: 'bis.explosive_unit.exotic' },
 ];

 export const obstacleType = [
    { id: 'WALL', name: 'bis.obstacle.wall' },
    { id: 'CEILING', name: 'bis.obstacle.ceiling' },
    { id: 'WINDOW', name: 'bis.obstacle.window' },
    { id: 'DOOR', name: 'bis.obstacle.door' },
 ];

 export const destructionType = [
    { id: 'EXERCISE', name: 'bis.destruction.exercise' },
    { id: 'REAL_WORK', name: 'bis.destruction.real_work' },
 ];

export interface BaseEntity extends RaRecord{
    name : string
}

export interface ProcessItem extends RaRecord {
    title : string;
    time : number;
    description : string;
}

export interface DestructionImages {
    after : Array<PhotoDto> | null;
    before : Array<PhotoDto> | null;
}

export interface Destruction extends RaRecord{
    destructionType : string;
    performerId : string;
    destruction : string;
    place : string;
    recommendations:string | null;
    seal : number | null;
    obstacleId : string | null;
    explosiveUnitId: string | null;
    go : boolean | null;
    twoStage: boolean | null;
    creationDate: string | null;
    updateDate: string | null;
    createdBy: string | null;
    date: string | null;
    updatedBy: string | null;
    processItems: Array<ProcessItem> | null;
}

export interface ExplosiveMaterial extends BaseEntity {
    reFactor: string;
    grain: number;
    unitType: unitDict;
    creationDate: String;
    updateDate: String;
    isApproved: boolean;
}

export interface ExplosiveUnit extends BaseEntity {
    description: string;
    newActual: number;
    newTnt: number;
    msd: number;
    makeTime: number;
    explosiveUnitType: String;
    creationDate: String;
    updateDate: String | null;
    createdBy: String;
    updatedBy: String | null;
    explosiveMaterials : Array<ExplosiveMaterialQuantity>
}

export interface Obstacle extends BaseEntity {
    description: string;
    thickness: number;
    obstacleType: String;
    creationDate: String;
    updateDate: String | null;
    createdBy: String;
    updatedBy: String | null;
    buildMaterials : Array<BuildMaterialQuantity>
}

export interface BuildMaterialQuantity{
    buildMaterial : BuildMaterial,
    quantity : number
}

export interface PhotoDto extends BaseEntity {
    base64: string;
    description: string;
}

export interface ExplosiveMaterialQuantity{
    explosiveMaterial : ExplosiveMaterial,
    quantity : number
}
export interface BuildMaterial extends BaseEntity {
    afactor: string;
    creationDate: String;
    updateDate: String;
    isApproved: boolean;
}

export interface User extends RaRecord {
    username: string;
    firstName: String;
    lastName: String;
    dutyTitle: String;
    email: String;
    createdDate: String;
    enabled: boolean;
    roles:Array<string>
}

export interface Category extends RaRecord {
    name: string;
}

export interface Product extends RaRecord {
    category_id: Identifier;
    description: string;
    height: number;
    image: string;
    price: number;
    reference: string;
    stock: number;
    thumbnail: string;
    width: number;
}

export interface Customer extends RaRecord {
    first_name: string;
    last_name: string;
    address: string;
    stateAbbr: string;
    city: string;
    zipcode: string;
    avatar: string;
    birthday: string;
    first_seen: string;
    last_seen: string;
    has_ordered: boolean;
    latest_purchase: string;
    has_newsletter: boolean;
    groups: string[];
    nb_commands: number;
    total_spent: number;
}

export type OrderStatus = 'ordered' | 'delivered' | 'cancelled';

export interface Order extends RaRecord {
    status: OrderStatus;
    basket: BasketItem[];
    date: Date;
    total: number;
}

export interface BasketItem {
    product_id: Identifier;
    quantity: number;
}

export interface Invoice extends RaRecord {}

export type ReviewStatus = 'accepted' | 'pending' | 'rejected';

export interface Review extends RaRecord {
    date: Date;
    status: ReviewStatus;
    customer_id: Identifier;
    product_id: Identifier;
}

declare global {
    interface Window {
        restServer: any;
    }
}
