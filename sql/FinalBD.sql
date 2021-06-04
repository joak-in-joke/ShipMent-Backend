--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cliente; Type: TABLE; Schema: public; Owner: boosmap
--

CREATE TABLE public.cliente (
    id integer NOT NULL,
    contacto_id integer,
    nombre character varying(50),
    nacionalidad character varying(50)
);


ALTER TABLE public.cliente OWNER TO boosmap;

--
-- Name: comentarioslineadetiempo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comentarioslineadetiempo (
    id integer NOT NULL,
    id_linea_tiempo integer NOT NULL,
    id_usuario integer NOT NULL,
    contenido character varying(50),
    creado timestamp without time zone,
    estado character varying(50),
    titulo character varying(50)
);


ALTER TABLE public.comentarioslineadetiempo OWNER TO postgres;

--
-- Name: comentarioslineadetiempo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comentarioslineadetiempo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comentarioslineadetiempo_id_seq OWNER TO postgres;

--
-- Name: comentarioslineadetiempo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comentarioslineadetiempo_id_seq OWNED BY public.comentarioslineadetiempo.id;


--
-- Name: contacto_proveedor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contacto_proveedor (
    id integer NOT NULL,
    id_proveedor integer NOT NULL,
    nombre character varying(50),
    cargo character varying(50),
    telefono integer,
    email character varying(50)
);


ALTER TABLE public.contacto_proveedor OWNER TO postgres;

--
-- Name: contacto_proveedor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contacto_proveedor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contacto_proveedor_id_seq OWNER TO postgres;

--
-- Name: contacto_proveedor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contacto_proveedor_id_seq OWNED BY public.contacto_proveedor.id;


--
-- Name: contactocliente; Type: TABLE; Schema: public; Owner: boosmap
--

CREATE TABLE public.contactocliente (
    id integer NOT NULL,
    id_cliente integer,
    nombre character varying(50),
    cargo character varying(50),
    telefono character varying(50),
    email character varying(50)
);


ALTER TABLE public.contactocliente OWNER TO boosmap;

--
-- Name: cuentabanproveedor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cuentabanproveedor (
    id integer NOT NULL,
    id_proveedor integer NOT NULL,
    n_cuenta integer,
    email character varying(50),
    rut integer,
    nombre_empresa character varying(50),
    banco character varying(50),
    tipo_cuenta character varying(50)
);


ALTER TABLE public.cuentabanproveedor OWNER TO postgres;

--
-- Name: cuentabanproveedor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cuentabanproveedor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cuentabanproveedor_id_seq OWNER TO postgres;

--
-- Name: cuentabanproveedor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cuentabanproveedor_id_seq OWNED BY public.cuentabanproveedor.id;


--
-- Name: dataembarque; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dataembarque (
    id integer NOT NULL,
    id_embarque integer NOT NULL,
    tipo_operacion character varying(50),
    intercom character varying(50),
    exportador character varying(50),
    importador character varying(50),
    embarcador character varying(50),
    agencia_aduana character varying(50),
    tipo_documento character varying(50),
    documento character varying(50),
    motonave character varying(50),
    viaje character varying(50),
    naviera character varying(50),
    transbordo boolean,
    reserva character varying(50),
    fecha_inicio date,
    fecha_fin date
);


ALTER TABLE public.dataembarque OWNER TO postgres;

--
-- Name: dataembarque_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.dataembarque_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dataembarque_id_seq OWNER TO postgres;

--
-- Name: dataembarque_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.dataembarque_id_seq OWNED BY public.dataembarque.id;


--
-- Name: datafcl; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.datafcl (
    id integer NOT NULL,
    id_data integer NOT NULL,
    deposito_contenedores character varying(50),
    cont_tipo character varying(50),
    sello character varying(50),
    puerto_destino character varying(50),
    lugar_destino character varying(50)
);


ALTER TABLE public.datafcl OWNER TO postgres;

--
-- Name: datafcl_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.datafcl_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.datafcl_id_seq OWNER TO postgres;

--
-- Name: datafcl_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.datafcl_id_seq OWNED BY public.datafcl.id;


--
-- Name: datalcl; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.datalcl (
    id integer NOT NULL,
    id_data integer,
    contendor character varying(50),
    cant_bultos integer,
    peso integer,
    volumen integer,
    lugar_destino character varying(50)
);


ALTER TABLE public.datalcl OWNER TO postgres;

--
-- Name: datalcl_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.datalcl_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.datalcl_id_seq OWNER TO postgres;

--
-- Name: datalcl_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.datalcl_id_seq OWNED BY public.datalcl.id;


--
-- Name: datausuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.datausuario (
    id integer NOT NULL,
    id_usuario integer NOT NULL,
    nombre character varying(50),
    apellido character varying(50),
    rut integer,
    dv character varying(50),
    mail character varying(50),
    estado character varying(50),
    cargo character varying(50),
    asesor character varying(50),
    telefono integer,
    pass character varying NOT NULL
);


ALTER TABLE public.datausuario OWNER TO postgres;

--
-- Name: datausuario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.datausuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.datausuario_id_seq OWNER TO postgres;

--
-- Name: datausuario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.datausuario_id_seq OWNED BY public.datausuario.id;


--
-- Name: documento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.documento (
    id integer NOT NULL,
    id_documentos integer NOT NULL,
    id_documentotipo integer NOT NULL,
    archivo character varying(50),
    vers integer
);


ALTER TABLE public.documento OWNER TO postgres;

--
-- Name: documento_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.documento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.documento_id_seq OWNER TO postgres;

--
-- Name: documento_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.documento_id_seq OWNED BY public.documento.id;


--
-- Name: documentos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.documentos (
    id integer NOT NULL,
    id_embarque integer NOT NULL
);


ALTER TABLE public.documentos OWNER TO postgres;

--
-- Name: documentos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.documentos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.documentos_id_seq OWNER TO postgres;

--
-- Name: documentos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.documentos_id_seq OWNED BY public.documentos.id;


--
-- Name: documentotipo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.documentotipo (
    id integer NOT NULL,
    tipo character varying(50)
);


ALTER TABLE public.documentotipo OWNER TO postgres;

--
-- Name: documentotipo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.documentotipo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.documentotipo_id_seq OWNER TO postgres;

--
-- Name: documentotipo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.documentotipo_id_seq OWNED BY public.documentotipo.id;


--
-- Name: embarque; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.embarque (
    id integer NOT NULL,
    n_operacion integer,
    estado character varying(50),
    referencia character varying(50),
    rut integer,
    medio_transporte character varying(50),
    eta date,
    etd date
);


ALTER TABLE public.embarque OWNER TO postgres;

--
-- Name: embarque_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.embarque_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.embarque_id_seq OWNER TO postgres;

--
-- Name: embarque_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.embarque_id_seq OWNED BY public.embarque.id;


--
-- Name: finanza; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.finanza (
    id integer NOT NULL,
    id_embarque integer NOT NULL,
    estado character varying(50),
    total character varying(30),
    descripcion character varying(50)
);


ALTER TABLE public.finanza OWNER TO postgres;

--
-- Name: finanza_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.finanza_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.finanza_id_seq OWNER TO postgres;

--
-- Name: finanza_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.finanza_id_seq OWNED BY public.finanza.id;


--
-- Name: finclientes; Type: TABLE; Schema: public; Owner: boosmap
--

CREATE TABLE public.finclientes (
    id_finanza integer,
    id_cliente integer
);


ALTER TABLE public.finclientes OWNER TO boosmap;

--
-- Name: item_finanza; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_finanza (
    id integer NOT NULL,
    id_finanza integer NOT NULL,
    id_proveedor integer NOT NULL,
    concepto character varying(50),
    monto integer,
    factura character varying(64),
    fac_tipo character varying(4),
    fac_fecha date,
    estado character varying(50)
);


ALTER TABLE public.item_finanza OWNER TO postgres;

--
-- Name: item_finanza_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.item_finanza_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.item_finanza_id_seq OWNER TO postgres;

--
-- Name: item_finanza_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_finanza_id_seq OWNED BY public.item_finanza.id;


--
-- Name: lineadetiempo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lineadetiempo (
    id integer NOT NULL,
    id_embarque integer NOT NULL,
    estado character varying(50)
);


ALTER TABLE public.lineadetiempo OWNER TO postgres;

--
-- Name: lineadetiempo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.lineadetiempo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lineadetiempo_id_seq OWNER TO postgres;

--
-- Name: lineadetiempo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lineadetiempo_id_seq OWNED BY public.lineadetiempo.id;


--
-- Name: mision; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mision (
    id integer NOT NULL,
    contenido character varying(50),
    creado timestamp without time zone,
    estado character varying(50)
);


ALTER TABLE public.mision OWNER TO postgres;

--
-- Name: mision_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.mision_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mision_id_seq OWNER TO postgres;

--
-- Name: mision_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.mision_id_seq OWNED BY public.mision.id;


--
-- Name: nota; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nota (
    id integer NOT NULL,
    id_usuario integer NOT NULL,
    contenido character varying(50),
    creado timestamp without time zone
);


ALTER TABLE public.nota OWNER TO postgres;

--
-- Name: nota_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.nota_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.nota_id_seq OWNER TO postgres;

--
-- Name: nota_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nota_id_seq OWNED BY public.nota.id;


--
-- Name: permisos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.permisos (
    id integer NOT NULL,
    perm_finanza boolean,
    perm_misiones boolean,
    perm_superuser boolean,
    perm_admin boolean,
    id_usuario integer
);


ALTER TABLE public.permisos OWNER TO postgres;

--
-- Name: permisos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.permisos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.permisos_id_seq OWNER TO postgres;

--
-- Name: permisos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.permisos_id_seq OWNED BY public.permisos.id;


--
-- Name: proveedor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proveedor (
    id integer NOT NULL,
    pais character varying(50),
    direccion character varying(50),
    nombre character varying(50),
    rut character varying(50),
    telefono integer,
    email character varying(50)
);


ALTER TABLE public.proveedor OWNER TO postgres;

--
-- Name: proveedor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.proveedor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.proveedor_id_seq OWNER TO postgres;

--
-- Name: proveedor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proveedor_id_seq OWNED BY public.proveedor.id;


--
-- Name: transbordodata; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transbordodata (
    id integer NOT NULL,
    id_data integer,
    puerto_transb character varying(50),
    naver_transb character varying(50),
    fecha date
);


ALTER TABLE public.transbordodata OWNER TO postgres;

--
-- Name: transbordodata_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.transbordodata_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.transbordodata_id_seq OWNER TO postgres;

--
-- Name: transbordodata_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.transbordodata_id_seq OWNED BY public.transbordodata.id;


--
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id integer NOT NULL,
    tipo integer
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- Name: usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuario_id_seq OWNER TO postgres;

--
-- Name: usuario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;


--
-- Name: valordata; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.valordata (
    id integer NOT NULL,
    id_data integer,
    nombre_mercancia character varying(50),
    valor_usd integer,
    flete_usd integer,
    seguro_usd integer,
    valor_cif integer
);


ALTER TABLE public.valordata OWNER TO postgres;

--
-- Name: valordata_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.valordata_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.valordata_id_seq OWNER TO postgres;

--
-- Name: valordata_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.valordata_id_seq OWNED BY public.valordata.id;


--
-- Name: comentarioslineadetiempo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarioslineadetiempo ALTER COLUMN id SET DEFAULT nextval('public.comentarioslineadetiempo_id_seq'::regclass);


--
-- Name: contacto_proveedor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacto_proveedor ALTER COLUMN id SET DEFAULT nextval('public.contacto_proveedor_id_seq'::regclass);


--
-- Name: cuentabanproveedor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuentabanproveedor ALTER COLUMN id SET DEFAULT nextval('public.cuentabanproveedor_id_seq'::regclass);


--
-- Name: dataembarque id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dataembarque ALTER COLUMN id SET DEFAULT nextval('public.dataembarque_id_seq'::regclass);


--
-- Name: datafcl id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datafcl ALTER COLUMN id SET DEFAULT nextval('public.datafcl_id_seq'::regclass);


--
-- Name: datalcl id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datalcl ALTER COLUMN id SET DEFAULT nextval('public.datalcl_id_seq'::regclass);


--
-- Name: datausuario id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datausuario ALTER COLUMN id SET DEFAULT nextval('public.datausuario_id_seq'::regclass);


--
-- Name: documento id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documento ALTER COLUMN id SET DEFAULT nextval('public.documento_id_seq'::regclass);


--
-- Name: documentos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documentos ALTER COLUMN id SET DEFAULT nextval('public.documentos_id_seq'::regclass);


--
-- Name: documentotipo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documentotipo ALTER COLUMN id SET DEFAULT nextval('public.documentotipo_id_seq'::regclass);


--
-- Name: embarque id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.embarque ALTER COLUMN id SET DEFAULT nextval('public.embarque_id_seq'::regclass);


--
-- Name: finanza id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.finanza ALTER COLUMN id SET DEFAULT nextval('public.finanza_id_seq'::regclass);


--
-- Name: item_finanza id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_finanza ALTER COLUMN id SET DEFAULT nextval('public.item_finanza_id_seq'::regclass);


--
-- Name: lineadetiempo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lineadetiempo ALTER COLUMN id SET DEFAULT nextval('public.lineadetiempo_id_seq'::regclass);


--
-- Name: mision id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mision ALTER COLUMN id SET DEFAULT nextval('public.mision_id_seq'::regclass);


--
-- Name: nota id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota ALTER COLUMN id SET DEFAULT nextval('public.nota_id_seq'::regclass);


--
-- Name: permisos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permisos ALTER COLUMN id SET DEFAULT nextval('public.permisos_id_seq'::regclass);


--
-- Name: proveedor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proveedor ALTER COLUMN id SET DEFAULT nextval('public.proveedor_id_seq'::regclass);


--
-- Name: transbordodata id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transbordodata ALTER COLUMN id SET DEFAULT nextval('public.transbordodata_id_seq'::regclass);


--
-- Name: usuario id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);


--
-- Name: valordata id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.valordata ALTER COLUMN id SET DEFAULT nextval('public.valordata_id_seq'::regclass);


--
-- Data for Name: cliente; Type: TABLE DATA; Schema: public; Owner: boosmap
--

COPY public.cliente (id, contacto_id, nombre, nacionalidad) FROM stdin;
\.


--
-- Data for Name: comentarioslineadetiempo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comentarioslineadetiempo (id, id_linea_tiempo, id_usuario, contenido, creado, estado, titulo) FROM stdin;
1	1	1	Salida del puerto	2021-05-18 22:34:05.784336	Activo	Salida
2	1	1	Llegada al puerto	2021-05-18 22:34:05.823341	Activo	Llegada
\.


--
-- Data for Name: contacto_proveedor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contacto_proveedor (id, id_proveedor, nombre, cargo, telefono, email) FROM stdin;
1	1	Hoshi Mang	Gerente de Ventas	839405783	hoshimeng@importChina.com
2	2	Manolo Ca├▒as	Gerente de Ventas	83759385	ManoloCa├▒as@ImportaEspa├▒a.com
\.


--
-- Data for Name: contactocliente; Type: TABLE DATA; Schema: public; Owner: boosmap
--

COPY public.contactocliente (id, id_cliente, nombre, cargo, telefono, email) FROM stdin;
\.


--
-- Data for Name: cuentabanproveedor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cuentabanproveedor (id, id_proveedor, n_cuenta, email, rut, nombre_empresa, banco, tipo_cuenta) FROM stdin;
1	1	86738495	importa@China.com	389247534	Importadora China	Banco de Xina	Cuenta corriente
2	2	2394872	importa@Espa├▒a.com	23489723	Importadora Espa├▒a	Banco de Espa├▒a	Cuenta vista
\.


--
-- Data for Name: dataembarque; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.dataembarque (id, id_embarque, tipo_operacion, intercom, exportador, importador, embarcador, agencia_aduana, tipo_documento, documento, motonave, viaje, naviera, transbordo, reserva, fecha_inicio, fecha_fin) FROM stdin;
1	1	Traer juguetitos	UMD	Importadora China	Importa que te importa	Huascar	Aduanazo Unimarc	Serio	Documentado.7z	Fiaummm	Comodo	grrrrr	f	none	\N	\N
\.


--
-- Data for Name: datafcl; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.datafcl (id, id_data, deposito_contenedores, cont_tipo, sello, puerto_destino, lugar_destino) FROM stdin;
1	1	No me la container	extra├▒o	Serigrafico	San Antonio	Valparaiso
\.


--
-- Data for Name: datalcl; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.datalcl (id, id_data, contendor, cant_bultos, peso, volumen, lugar_destino) FROM stdin;
1	1	Iberica	50	130	230	Arica
\.


--
-- Data for Name: datausuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.datausuario (id, id_usuario, nombre, apellido, rut, dv, mail, estado, cargo, asesor, telefono, pass) FROM stdin;
1	1	Juan	Gomez	19427653	k	asd@asd.cl	Soltero	Gerente general	Raul Mejias	98487347	asd123
\.


--
-- Data for Name: documento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.documento (id, id_documentos, id_documentotipo, archivo, vers) FROM stdin;
1	1	1	Factura.zip	1
\.


--
-- Data for Name: documentos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.documentos (id, id_embarque) FROM stdin;
1	1
\.


--
-- Data for Name: documentotipo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.documentotipo (id, tipo) FROM stdin;
1	Factura
\.


--
-- Data for Name: embarque; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.embarque (id, n_operacion, estado, referencia, rut, medio_transporte, eta, etd) FROM stdin;
1	1	Activo	BMP3100	97657842	avion	2021-05-02	2021-06-02
2	2	Finalizado	BMP3111	87462834	camion	2021-05-01	2021-05-02
3	3	Activo	BMP3112	60938573	a pata	2021-05-23	2021-06-12
\.


--
-- Data for Name: finanza; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.finanza (id, id_embarque, estado, total, descripcion) FROM stdin;
1	1	Activo	312699	\N
2	2	Finalizado	1908762	\N
3	3	Activo	1982736	\N
\.


--
-- Data for Name: finclientes; Type: TABLE DATA; Schema: public; Owner: boosmap
--

COPY public.finclientes (id_finanza, id_cliente) FROM stdin;
\.


--
-- Data for Name: item_finanza; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.item_finanza (id, id_finanza, id_proveedor, concepto, monto, factura, fac_tipo, fac_fecha, estado) FROM stdin;
1	1	1	Figuras Chinas	250000	\N	\N	\N	\N
2	1	1	Monas Chinas	62699	\N	\N	\N	\N
\.


--
-- Data for Name: lineadetiempo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lineadetiempo (id, id_embarque, estado) FROM stdin;
1	1	Activo
\.


--
-- Data for Name: mision; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mision (id, contenido, creado, estado) FROM stdin;
1	Terminar la aplicacion	2021-05-18 21:52:09.013836	Activo
2	Conectar las misiones edited	2021-05-18 21:52:30.149464	Activo
3	Terminar misiones y controllers	2021-05-28 22:24:43.003784	Activo
5	\N	2021-06-04 03:03:32.56322	Activo
6	kaka	2021-06-04 00:00:00	Activo
\.


--
-- Data for Name: nota; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nota (id, id_usuario, contenido, creado) FROM stdin;
1	1	Comunicarse con el Jefe	2021-05-18 22:00:22.723524
2	1	Terminar trabajo sucio	2021-05-18 22:00:44.072639
\.


--
-- Data for Name: permisos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.permisos (id, perm_finanza, perm_misiones, perm_superuser, perm_admin, id_usuario) FROM stdin;
1	t	t	t	t	\N
2	t	t	t	t	1
\.


--
-- Data for Name: proveedor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proveedor (id, pais, direccion, nombre, rut, telefono, email) FROM stdin;
1	China	Calle Hoshiming	Kung leo	 111111111	873647586	Importchina@gmail.com
2	Espa├▒a	Madrid	Importadora Espa├▒ola	192375289	92097852	importadoraEspa├▒ola@gmail.com
\.


--
-- Data for Name: transbordodata; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.transbordodata (id, id_data, puerto_transb, naver_transb, fecha) FROM stdin;
\.


--
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (id, tipo) FROM stdin;
1	1
\.


--
-- Data for Name: valordata; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.valordata (id, id_data, nombre_mercancia, valor_usd, flete_usd, seguro_usd, valor_cif) FROM stdin;
1	1	La merca	650	450	20	329874
\.


--
-- Name: comentarioslineadetiempo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comentarioslineadetiempo_id_seq', 2, true);


--
-- Name: contacto_proveedor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contacto_proveedor_id_seq', 2, true);


--
-- Name: cuentabanproveedor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cuentabanproveedor_id_seq', 2, true);


--
-- Name: dataembarque_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dataembarque_id_seq', 1, true);


--
-- Name: datafcl_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.datafcl_id_seq', 1, true);


--
-- Name: datalcl_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.datalcl_id_seq', 1, true);


--
-- Name: datausuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.datausuario_id_seq', 1, true);


--
-- Name: documento_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.documento_id_seq', 1, true);


--
-- Name: documentos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.documentos_id_seq', 1, true);


--
-- Name: documentotipo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.documentotipo_id_seq', 1, true);


--
-- Name: embarque_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.embarque_id_seq', 3, true);


--
-- Name: finanza_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.finanza_id_seq', 3, true);


--
-- Name: item_finanza_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.item_finanza_id_seq', 2, true);


--
-- Name: lineadetiempo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lineadetiempo_id_seq', 1, true);


--
-- Name: mision_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.mision_id_seq', 6, true);


--
-- Name: nota_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nota_id_seq', 2, true);


--
-- Name: permisos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.permisos_id_seq', 1, true);


--
-- Name: proveedor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proveedor_id_seq', 2, true);


--
-- Name: transbordodata_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.transbordodata_id_seq', 1, false);


--
-- Name: usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_id_seq', 1, true);


--
-- Name: valordata_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.valordata_id_seq', 1, true);


--
-- Name: cliente cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: boosmap
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id);


--
-- Name: comentarioslineadetiempo comentarioslineadetiempo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarioslineadetiempo
    ADD CONSTRAINT comentarioslineadetiempo_pkey PRIMARY KEY (id);


--
-- Name: contacto_proveedor contacto_proveedor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacto_proveedor
    ADD CONSTRAINT contacto_proveedor_pkey PRIMARY KEY (id);


--
-- Name: contactocliente contactocliente_pkey; Type: CONSTRAINT; Schema: public; Owner: boosmap
--

ALTER TABLE ONLY public.contactocliente
    ADD CONSTRAINT contactocliente_pkey PRIMARY KEY (id);


--
-- Name: cuentabanproveedor cuentabanproveedor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuentabanproveedor
    ADD CONSTRAINT cuentabanproveedor_pkey PRIMARY KEY (id);


--
-- Name: dataembarque dataembarque_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dataembarque
    ADD CONSTRAINT dataembarque_pkey PRIMARY KEY (id);


--
-- Name: datafcl datafcl_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datafcl
    ADD CONSTRAINT datafcl_pkey PRIMARY KEY (id);


--
-- Name: datalcl datalcl_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datalcl
    ADD CONSTRAINT datalcl_pkey PRIMARY KEY (id);


--
-- Name: datausuario datausuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datausuario
    ADD CONSTRAINT datausuario_pkey PRIMARY KEY (id);


--
-- Name: documento documento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documento
    ADD CONSTRAINT documento_pkey PRIMARY KEY (id);


--
-- Name: documentos documentos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documentos
    ADD CONSTRAINT documentos_pkey PRIMARY KEY (id);


--
-- Name: documentotipo documentotipo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documentotipo
    ADD CONSTRAINT documentotipo_pkey PRIMARY KEY (id);


--
-- Name: embarque embarque_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.embarque
    ADD CONSTRAINT embarque_pkey PRIMARY KEY (id);


--
-- Name: finanza finanza_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.finanza
    ADD CONSTRAINT finanza_pkey PRIMARY KEY (id);


--
-- Name: item_finanza item_finanza_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_finanza
    ADD CONSTRAINT item_finanza_pkey PRIMARY KEY (id);


--
-- Name: lineadetiempo lineadetiempo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lineadetiempo
    ADD CONSTRAINT lineadetiempo_pkey PRIMARY KEY (id);


--
-- Name: mision mision_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mision
    ADD CONSTRAINT mision_pkey PRIMARY KEY (id);


--
-- Name: nota nota_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota
    ADD CONSTRAINT nota_pkey PRIMARY KEY (id);


--
-- Name: permisos permisos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permisos
    ADD CONSTRAINT permisos_pkey PRIMARY KEY (id);


--
-- Name: proveedor proveedor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proveedor
    ADD CONSTRAINT proveedor_pkey PRIMARY KEY (id);


--
-- Name: transbordodata transbordodata_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transbordodata
    ADD CONSTRAINT transbordodata_pkey PRIMARY KEY (id);


--
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);


--
-- Name: valordata valordata_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.valordata
    ADD CONSTRAINT valordata_pkey PRIMARY KEY (id);


--
-- Name: cliente cliente_contacto_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: boosmap
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_contacto_id_fkey FOREIGN KEY (contacto_id) REFERENCES public.contactocliente(id);


--
-- Name: comentarioslineadetiempo comentarioslineadetiempo_id_linea_tiempo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarioslineadetiempo
    ADD CONSTRAINT comentarioslineadetiempo_id_linea_tiempo_fkey FOREIGN KEY (id_linea_tiempo) REFERENCES public.lineadetiempo(id);


--
-- Name: comentarioslineadetiempo comentarioslineadetiempo_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarioslineadetiempo
    ADD CONSTRAINT comentarioslineadetiempo_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id);


--
-- Name: contacto_proveedor contacto_proveedor_id_proveedor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacto_proveedor
    ADD CONSTRAINT contacto_proveedor_id_proveedor_fkey FOREIGN KEY (id_proveedor) REFERENCES public.proveedor(id);


--
-- Name: contactocliente contactocliente_id_cliente_fkey; Type: FK CONSTRAINT; Schema: public; Owner: boosmap
--

ALTER TABLE ONLY public.contactocliente
    ADD CONSTRAINT contactocliente_id_cliente_fkey FOREIGN KEY (id_cliente) REFERENCES public.cliente(id);


--
-- Name: cuentabanproveedor cuentabanproveedor_id_proveedor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cuentabanproveedor
    ADD CONSTRAINT cuentabanproveedor_id_proveedor_fkey FOREIGN KEY (id_proveedor) REFERENCES public.proveedor(id);


--
-- Name: dataembarque dataembarque_id_embarque_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dataembarque
    ADD CONSTRAINT dataembarque_id_embarque_fkey FOREIGN KEY (id_embarque) REFERENCES public.embarque(id);


--
-- Name: datafcl datafcl_id_data_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datafcl
    ADD CONSTRAINT datafcl_id_data_fkey FOREIGN KEY (id_data) REFERENCES public.dataembarque(id);


--
-- Name: datalcl datalcl_id_data_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datalcl
    ADD CONSTRAINT datalcl_id_data_fkey FOREIGN KEY (id_data) REFERENCES public.dataembarque(id);


--
-- Name: datausuario datausuario_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datausuario
    ADD CONSTRAINT datausuario_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id);


--
-- Name: documento documento_id_documentos_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documento
    ADD CONSTRAINT documento_id_documentos_fkey FOREIGN KEY (id_documentos) REFERENCES public.documento(id);


--
-- Name: documento documento_id_documentotipo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documento
    ADD CONSTRAINT documento_id_documentotipo_fkey FOREIGN KEY (id_documentotipo) REFERENCES public.documentotipo(id);


--
-- Name: documentos documentos_id_embarque_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.documentos
    ADD CONSTRAINT documentos_id_embarque_fkey FOREIGN KEY (id_embarque) REFERENCES public.embarque(id);


--
-- Name: finanza finanza_id_embarque_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.finanza
    ADD CONSTRAINT finanza_id_embarque_fkey FOREIGN KEY (id_embarque) REFERENCES public.embarque(id);


--
-- Name: finclientes finclientes_id_cliente_fkey; Type: FK CONSTRAINT; Schema: public; Owner: boosmap
--

ALTER TABLE ONLY public.finclientes
    ADD CONSTRAINT finclientes_id_cliente_fkey FOREIGN KEY (id_cliente) REFERENCES public.cliente(id);


--
-- Name: finclientes finclientes_id_finanza_fkey; Type: FK CONSTRAINT; Schema: public; Owner: boosmap
--

ALTER TABLE ONLY public.finclientes
    ADD CONSTRAINT finclientes_id_finanza_fkey FOREIGN KEY (id_finanza) REFERENCES public.finanza(id);


--
-- Name: item_finanza item_finanza_id_finanza_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_finanza
    ADD CONSTRAINT item_finanza_id_finanza_fkey FOREIGN KEY (id_finanza) REFERENCES public.finanza(id);


--
-- Name: item_finanza item_finanza_id_proveedor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_finanza
    ADD CONSTRAINT item_finanza_id_proveedor_fkey FOREIGN KEY (id_proveedor) REFERENCES public.proveedor(id);


--
-- Name: lineadetiempo lineadetiempo_id_embarque_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lineadetiempo
    ADD CONSTRAINT lineadetiempo_id_embarque_fkey FOREIGN KEY (id_embarque) REFERENCES public.embarque(id);


--
-- Name: nota nota_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nota
    ADD CONSTRAINT nota_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id);


--
-- Name: permisos permisos_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permisos
    ADD CONSTRAINT permisos_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id);


--
-- Name: transbordodata transbordodata_id_data_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transbordodata
    ADD CONSTRAINT transbordodata_id_data_fkey FOREIGN KEY (id_data) REFERENCES public.dataembarque(id);


--
-- Name: valordata valordata_id_data_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.valordata
    ADD CONSTRAINT valordata_id_data_fkey FOREIGN KEY (id_data) REFERENCES public.dataembarque(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: boosmap
--

GRANT USAGE ON SCHEMA public TO postgres;


--
-- Name: TABLE cliente; Type: ACL; Schema: public; Owner: boosmap
--

GRANT SELECT ON TABLE public.cliente TO postgres;


--
-- Name: TABLE contactocliente; Type: ACL; Schema: public; Owner: boosmap
--

GRANT SELECT ON TABLE public.contactocliente TO postgres;


--
-- Name: TABLE finclientes; Type: ACL; Schema: public; Owner: boosmap
--

GRANT SELECT ON TABLE public.finclientes TO postgres;


--
-- PostgreSQL database dump complete
--

