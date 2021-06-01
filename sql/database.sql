--
-- PostgreSQL database dump
--

-- Dumped from database version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)

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
-- Name: comentarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comentarios (
    id integer NOT NULL,
    misiones text,
    comentarios text,
    creado timestamp without time zone
);


ALTER TABLE public.comentarios OWNER TO postgres;

--
-- Name: comentarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comentarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comentarios_id_seq OWNER TO postgres;

--
-- Name: comentarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comentarios_id_seq OWNED BY public.comentarios.id;


--
-- Name: datos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.datos (
    id integer NOT NULL,
    banco text,
    tipocuenta text,
    nombre text,
    correo text,
    creado timestamp without time zone,
    id_provedor integer
);


ALTER TABLE public.datos OWNER TO postgres;

--
-- Name: datos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.datos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.datos_id_seq OWNER TO postgres;

--
-- Name: datos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.datos_id_seq OWNED BY public.datos.id;


--
-- Name: embarques; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.embarques (
    id integer NOT NULL,
    nro_operacion integer NOT NULL,
    estado text,
    referencia text,
    etd text,
    eta text,
    observacion text,
    tipodocumento text NOT NULL,
    incoterm text NOT NULL,
    mediotransporte text,
    aduana text,
    puertoembarque text NOT NULL,
    puertodestino text NOT NULL,
    nombremercancia text NOT NULL,
    valorusd integer NOT NULL,
    valorflete integer,
    valorseguro integer,
    total integer,
    trasbordo boolean NOT NULL,
    id_provedor integer,
    id_personal integer,
    creado timestamp without time zone
);


ALTER TABLE public.embarques OWNER TO postgres;

--
-- Name: embarques_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.embarques_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.embarques_id_seq OWNER TO postgres;

--
-- Name: embarques_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.embarques_id_seq OWNED BY public.embarques.id;


--
-- Name: misiones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.misiones (
    id integer NOT NULL,
    misiones text,
    comentarios text,
    creado timestamp without time zone
);


ALTER TABLE public.misiones OWNER TO postgres;

--
-- Name: misiones_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.misiones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.misiones_id_seq OWNER TO postgres;

--
-- Name: misiones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.misiones_id_seq OWNED BY public.misiones.id;


--
-- Name: personal; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.personal (
    id integer NOT NULL,
    nombre text NOT NULL,
    rut integer NOT NULL,
    direccion text,
    cargo text NOT NULL,
    giro text,
    asesor text,
    nacionalidad text,
    region text,
    comuna text,
    creado timestamp without time zone
);


ALTER TABLE public.personal OWNER TO postgres;

--
-- Name: personal_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.personal_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.personal_id_seq OWNER TO postgres;

--
-- Name: personal_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.personal_id_seq OWNED BY public.personal.id;


--
-- Name: provedores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provedores (
    id integer NOT NULL,
    nombre text NOT NULL,
    cargo text,
    telefono integer,
    email text,
    emailcontacto text,
    rut integer,
    direccion text,
    pais text,
    creado timestamp without time zone
);


ALTER TABLE public.provedores OWNER TO postgres;

--
-- Name: provedores_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.provedores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.provedores_id_seq OWNER TO postgres;

--
-- Name: provedores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.provedores_id_seq OWNED BY public.provedores.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    cod_rol character varying(30) NOT NULL,
    nombre character varying(30) NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.roles_id_seq OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: trasbordos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.trasbordos (
    id integer NOT NULL,
    puerto text,
    nave text,
    fecha date,
    creado timestamp without time zone,
    id_embarque integer
);


ALTER TABLE public.trasbordos OWNER TO postgres;

--
-- Name: trasbordos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.trasbordos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.trasbordos_id_seq OWNER TO postgres;

--
-- Name: trasbordos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.trasbordos_id_seq OWNED BY public.trasbordos.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    rut integer NOT NULL,
    nombre character varying(30) NOT NULL,
    apellido character varying(30) NOT NULL,
    roles_id integer NOT NULL,
    password text,
    id_personal integer
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: comentarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios ALTER COLUMN id SET DEFAULT nextval('public.comentarios_id_seq'::regclass);


--
-- Name: datos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datos ALTER COLUMN id SET DEFAULT nextval('public.datos_id_seq'::regclass);


--
-- Name: embarques id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.embarques ALTER COLUMN id SET DEFAULT nextval('public.embarques_id_seq'::regclass);


--
-- Name: misiones id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.misiones ALTER COLUMN id SET DEFAULT nextval('public.misiones_id_seq'::regclass);


--
-- Name: personal id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal ALTER COLUMN id SET DEFAULT nextval('public.personal_id_seq'::regclass);


--
-- Name: provedores id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provedores ALTER COLUMN id SET DEFAULT nextval('public.provedores_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: trasbordos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trasbordos ALTER COLUMN id SET DEFAULT nextval('public.trasbordos_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: comentarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comentarios (id, misiones, comentarios, creado) FROM stdin;
\.


--
-- Data for Name: datos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.datos (id, banco, tipocuenta, nombre, correo, creado, id_provedor) FROM stdin;
1	Banco Talca	Cuenta corriente	Dora la Pecadora	DoralaExportadora@Gmail.com	2021-05-05 01:59:16.158452	1
\.


--
-- Data for Name: embarques; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.embarques (id, nro_operacion, estado, referencia, etd, eta, observacion, tipodocumento, incoterm, mediotransporte, aduana, puertoembarque, puertodestino, nombremercancia, valorusd, valorflete, valorseguro, total, trasbordo, id_provedor, id_personal, creado) FROM stdin;
2	1	Activo	Iron Maiden	MCA	CMA		Veridico	BRG	Aereo	Aduanazo Unimarc	Chimbarongo	Tongoy	La Merk	699	120000	15000	150000	f	1	2	2021-05-05 02:12:33.582351
3	2	Finalizado	God reference	MCE	CMA		Falsificaiden	BRG	Maritimo	Aduanero	los Vilos	La Loma	Organos	699	200000	15000	250000	f	1	3	2021-05-05 02:14:16.891256
4	3	Activo	Entendi la referencia	GOD	KYA		Pulentero	BRG	Terrestre	Aduanero	los VIOS	La lomaiden	Organos	699	200000	15000	250000	t	1	3	2021-05-05 02:29:18.809636
\.


--
-- Data for Name: misiones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.misiones (id, misiones, comentarios, creado) FROM stdin;
1	trababar arduamente en el embarque que debe venir de China	Las importaciones deben estar supervisadas	2021-05-05 02:40:15.643452
2	Hablar con Big Smoke	Mantener la zona limpia	2021-05-22 00:00:00
4	Vincular back con front	porfa hazlo	2021-05-07 00:00:00
\.


--
-- Data for Name: personal; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.personal (id, nombre, rut, direccion, cargo, giro, asesor, nacionalidad, region, comuna, creado) FROM stdin;
2	Jose inFeliz	1111111	Los matorrales	Junior	360 pulento	asesoria Chilena	Chile	Metropolitana	Lo Barnechea	2021-05-05 01:43:10.945526
3	Franco dePSP	94857162	Lo mas brigido	Jefe	540 backflip	asesoria Chilena	Chile	Metropolitana	La Pintana	2021-05-05 01:44:28.412369
4	Maria Juana	78937462	Submarino	Aviador	toa la noshe	asesoria Chilena	Chile	Metropolitana	Jamaica	2021-05-05 01:45:23.200175
\.


--
-- Data for Name: provedores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provedores (id, nombre, cargo, telefono, email, emailcontacto, rut, direccion, pais, creado) FROM stdin;
1	Exportadora Dora	Recursos inHumanos	977766633	DoralaExportadora@Gmail.com	Doroti@exportadora.com	666333666	El pais de las maravillas	Netherland	2021-05-05 01:58:01.093635
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, cod_rol, nombre) FROM stdin;
2	adm	administrador
3	usr	usuario
1	sup	superusuario
\.


--
-- Data for Name: trasbordos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.trasbordos (id, puerto, nave, fecha, creado, id_embarque) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, rut, nombre, apellido, roles_id, password, id_personal) FROM stdin;
3	1111111	Jose	inFeliz	2	$2a$10$tP2BJpMacj0xhgXqeOuQxO5l4E/3ecbjbBdRQ59JhCutIoaCjRPHi	2
9	94857162	Franco	dePSP	2	$2a$10$WCb6ER7tspgzMWrjkmwr9ei/r8yW1WuEuk191vCf5BUZK721vl5aS	3
4	78937462	Maria	Juana	2	$2a$10$ykkVrlmALLNSaAJ8q9chBui5MqKjU.Uku3.TAc5860jvQUsS4Qh8W	4
\.


--
-- Name: comentarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comentarios_id_seq', 1, false);


--
-- Name: datos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.datos_id_seq', 1, true);


--
-- Name: embarques_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.embarques_id_seq', 4, true);


--
-- Name: misiones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.misiones_id_seq', 4, true);


--
-- Name: personal_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.personal_id_seq', 4, true);


--
-- Name: provedores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provedores_id_seq', 1, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 3, true);


--
-- Name: trasbordos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.trasbordos_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 9, true);


--
-- Name: comentarios comentarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comentarios
    ADD CONSTRAINT comentarios_pkey PRIMARY KEY (id);


--
-- Name: datos datos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datos
    ADD CONSTRAINT datos_pkey PRIMARY KEY (id);


--
-- Name: embarques embarques_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.embarques
    ADD CONSTRAINT embarques_pkey PRIMARY KEY (id);


--
-- Name: misiones misiones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.misiones
    ADD CONSTRAINT misiones_pkey PRIMARY KEY (id);


--
-- Name: personal personal_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal
    ADD CONSTRAINT personal_pkey PRIMARY KEY (id);


--
-- Name: provedores provedores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provedores
    ADD CONSTRAINT provedores_pkey PRIMARY KEY (id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: trasbordos trasbordos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trasbordos
    ADD CONSTRAINT trasbordos_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: datos datos_id_provedor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datos
    ADD CONSTRAINT datos_id_provedor_fkey FOREIGN KEY (id_provedor) REFERENCES public.provedores(id);


--
-- Name: embarques embarques_id_personal_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.embarques
    ADD CONSTRAINT embarques_id_personal_fkey FOREIGN KEY (id_personal) REFERENCES public.personal(id);


--
-- Name: embarques embarques_id_provedor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.embarques
    ADD CONSTRAINT embarques_id_provedor_fkey FOREIGN KEY (id_provedor) REFERENCES public.provedores(id);


--
-- Name: trasbordos trasbordos_id_embarque_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trasbordos
    ADD CONSTRAINT trasbordos_id_embarque_fkey FOREIGN KEY (id_embarque) REFERENCES public.embarques(id);


--
-- Name: users users_id_personal_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_id_personal_fkey FOREIGN KEY (id_personal) REFERENCES public.personal(id);


--
-- Name: users users_roles_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_roles_id_fkey FOREIGN KEY (roles_id) REFERENCES public.roles(id);


--
-- PostgreSQL database dump complete
--

