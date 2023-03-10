import { Proveedor } from './proveedor';
import { TipoPago } from './tipo-pago';
import { Servicio } from './servicio';
import { Ubicacion } from './ubicacion';
import { Solicitante } from './solicitante';
export interface Solicitud {
  id: number;
  descripcion: string;
  foto_descripcion: File;
  fecha_creacion: string;
  fecha_expiracion: string;
  solicitante: Solicitante;
  ubicacion: Ubicacion;
  servicio: Servicio;
  tipo_pago: TipoPago;
  proveedor: Proveedor;
  adjudicar: boolean;
  pagada: boolean;
  estado: boolean;
  termino: string;
  rating: number;
  descripcion_rating: string;
}
export interface SolicitudProfesion {
  id: number;
  proveedor: Proveedor;
  profesion: string;
  anio_experiencia: number;
  fecha_solicitud: string;
  documento: string;
  estado: boolean;
  fecha: string | null;
}

export interface SolicitudProfesionPaginacion {
  page_size: number;
  total_objects: number;
  total_pages: number;
  current_page_number: number;
  next: string | null;
  previous: string | null;
  results: SolicitudProfesion[];
}
