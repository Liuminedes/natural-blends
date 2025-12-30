// src/data/menu.js

// ✅ Imports (Vite empaqueta estas imágenes para producción)
import bowlSalmon from "@/assets/products/bowl-salmon.png";
import bowlFalafel from "@/assets/products/bowl-falafel.png";
import bowlArrozPollo from "@/assets/products/bowl-arroz-pollo.png";
import bowlDelRancho from "@/assets/products/bowl-del-rancho.png";
import bowlVeggie from "@/assets/products/bowl-veggie.png";
import bowlPastaCerdo from "@/assets/products/bowl-pasta-cerdo.png";

import ensaladaFesta from "@/assets/products/ensalada-festa.png";
import ensaladaAtun from "@/assets/products/ensalada-atun.png";
import ensaladaPolloPesto from "@/assets/products/ensalada-pollo-pesto.png";
import ensaladaVeggie from "@/assets/products/ensalada-veggie.png";
import ensaladaHawaiana from "@/assets/products/ensalada-hawaiana.png";
import ensaladaPollo from "@/assets/products/ensalada-pollo.png";
import ensaladaPolloFrijol from "@/assets/products/ensalada-pollo-frijol.png";

import sandwichPolloChampi from "@/assets/products/sandwich-pollo-y-champi.png";
import sandwichChorizoArtesanal from "@/assets/products/sandwich-chorizo-artesanal.png";
import sandwichCerdoAlHorno from "@/assets/products/sandwich-cerdo-al-horno.png";
import sandwichJamonDePavo from "@/assets/products/sandwich-jamon-de-pavo.png";
import sandwichLulito from "@/assets/products/sandwich-lulito.png";
import sandwichAtunYHuevo from "@/assets/products/sandwich-atun-y-huevo.png";
import sandwichCaprese from "@/assets/products/sandwich-caprese.png";
import sandwichMixVegetales from "@/assets/products/sandwich-mix-vegetales.png";

import hamburguesaPollo from "@/assets/products/hamburguesa-pollo.png";
import hamburguesaVeggie from "@/assets/products/hamburguesa-veggie.png";

import batidoFrutosBlue from "@/assets/products/batido-frutos-blue.png";
import batidoAmarilloMix from "@/assets/products/batido-amarillo-mix.png";
import batidoMaracuyada from "@/assets/products/batido-maracuyada.png";
import batidoLulada from "@/assets/products/batido-lulada.png";
import batidoCocoRed from "@/assets/products/batido-coco-red.png";
import batidoLycheeIsland from "@/assets/products/batido-lychee-island.png";
import batidoChontacoco from "@/assets/products/batido-chontacoco.png";
import batidoLimonadaDeCoco from "@/assets/products/batido-limonada-de-coco.png";

import bebidaFrutosRojos from "@/assets/products/bebida-frutos-rojos.png";
import bebidaFrutosAmarillos from "@/assets/products/bebida-frutos-amarillos.png";
import bebidaNaranjaRose from "@/assets/products/bebida-naranja-rose.png";
import bebidaNaranjaPassion from "@/assets/products/bebida-naranja-passion.png";
import bebidaTropical from "@/assets/products/bebida-tropical.png";
import bebidaSpycitrus from "@/assets/products/bebida-spycitrus.png";
import bebidaAtardecer from "@/assets/products/bebida-atardecer.png";

import bowlAcai from "@/assets/products/bowl-acai.png";
import bowlRojo from "@/assets/products/bowl-rojo.png";
import bowlAmarillo from "@/assets/products/bowl-amarillo.png";

export const CATEGORIES = [
  { id: "bowls", name: "Natural Bowls", color: "nb.mint" },
  { id: "ensaladas", name: "Ensaladas", color: "nb.sun" },
  { id: "sandwiches", name: "Sándwiches", color: "nb.aqua" },
  { id: "hamburguesas", name: "Hamburguesas", color: "nb.coral" },
  { id: "batidos", name: "Batidos", color: "nb.plum" },
  { id: "bebidas", name: "Bebidas & Café", color: "nb.plum" },
  { id: "bowls_fruta", name: "Bowls de Fruta", color: "nb.coral" },
];

export const MENU = [
  // ===================== NATURAL BOWLS =====================
  {
    id: "bowl-salmon",
    category: "bowls",
    name: "Bowl Salmón",
    price: 39500,
    desc: "Salmón a la plancha, arroz integral con vegetales salteados (zanahoria, puerro, pimentón, brócoli, champiñones) & vinagreta de maracuyá.",
    tags: ["Proteína"],
    isVeggie: false,
    img: bowlSalmon,
  },
  {
    id: "bowl-falafel",
    category: "bowls",
    name: "Bowl Falafel",
    price: 29900,
    desc: "Falafel horneados, vegetales encurtidos (pepino, cebolla & repollo), tomate, maíz, sobre quinoa fría & salsa de ajo.",
    tags: ["Veggie"],
    isVeggie: true,
    img: bowlFalafel,
  },
  {
    id: "arroz-pollo",
    category: "bowls",
    name: "Arroz Pollo",
    price: 22800,
    desc: "Arroz integral con pechuga de pollo desmechada & vegetales salteados (zanahoria, puerro, pimentón, brócoli & apio) en teriyaki.",
    tags: ["Proteína"],
    isVeggie: false,
    img: bowlArrozPollo,
  },
  {
    id: "del-rancho",
    category: "bowls",
    name: "Del Rancho",
    price: 29900,
    desc: "Chorizo artesanal, frijol caraota, arroz integral, guacamole, pico e’ gallo, sour cream, nachos, lechuga & salsa mexicana de tomates.",
    tags: ["Top"],
    isVeggie: false,
    img: bowlDelRancho,
  },
  {
    id: "bowl-veggie",
    category: "bowls",
    name: "Veggie",
    price: 25000,
    desc: "Arroz integral con carne vegetal, frijol caraota & vegetales salteados (zanahoria, puerro, pimentón, brócoli & apio) en teriyaki.",
    tags: ["Veggie"],
    isVeggie: true,
    img: bowlVeggie,
  },
  {
    id: "pasta-cerdo",
    category: "bowls",
    name: "Pasta Cerdo",
    price: 23600,
    desc: "Pasta corta con cerdo desmechado & vegetales salteados (zanahoria, puerro, pimentón, brócoli & apio) en teriyaki.",
    tags: ["Proteína"],
    isVeggie: false,
    img: bowlPastaCerdo,
  },

  // ===================== ENSALADAS =====================
  {
    id: "ens-festa",
    category: "ensaladas",
    name: "Festa",
    price: 29900,
    desc: "Cerdo desmechado, fresas, lechuga, dip de pimentón, crema de queso, crutones, zanahoria, espinaca & salsa de ajo.",
    tags: ["Top"],
    isVeggie: false,
    img: ensaladaFesta,
  },
  {
    id: "ens-atun",
    category: "ensaladas",
    name: "Atún",
    price: 29600,
    desc: "Atún en lomitos, pasta corta, maíz, mozzarella, aceitunas kalamata, lechuga, tomate cherry & salsa de ajo.",
    tags: ["Proteína"],
    isVeggie: false,
    img: ensaladaAtun,
  },
  {
    id: "ens-pollo-pesto",
    category: "ensaladas",
    name: "Pollo Pesto",
    price: 28600,
    desc: "Pechuga desmechada, pasta corta, lechuga, aceitunas kalamata, albahaca, mozzarella, tomates cherry & champiñones salteados, espinaca, salsa de albahaca.",
    tags: ["Top"],
    isVeggie: false,
    img: ensaladaPolloPesto,
  },
  {
    id: "ens-veggie",
    category: "ensaladas",
    name: "Veggie",
    price: 27900,
    desc: "Carne vegetal, champiñones, pepino agridulce, tomate, zanahoria, espinaca, queso mozzarella, lechuga & crutones.",
    tags: ["Veggie"],
    isVeggie: true,
    img: ensaladaVeggie,
  },
  {
    id: "ens-hawaiana",
    category: "ensaladas",
    name: "Hawaiana",
    price: 27900,
    desc: "Pechuga desmechada, jamón, piña, cebolla encurtida, crutones, mozzarella, pepino agridulce, lechuga, espinaca & salsa de ajo.",
    tags: ["Top"],
    isVeggie: false,
    img: ensaladaHawaiana,
  },
  {
    id: "ens-pollo",
    category: "ensaladas",
    name: "Pollo",
    price: 26900,
    desc: "Pechuga desmechada, tomate, champiñones, mozzarella, espinaca, pepino agridulce, crutones, lechuga, zanahoria & salsa de ajo.",
    tags: ["Proteína"],
    isVeggie: false,
    img: ensaladaPollo,
  },
  {
    id: "ens-pollo-frijol",
    category: "ensaladas",
    name: "Pollo Frijol",
    price: 26900,
    desc: "Pechuga desmechada, tomate, maíz, frijol caraota, mozzarella, nachos, lechuga & salsa de ajo + jalapeños.",
    tags: ["Proteína"],
    isVeggie: false,
    img: ensaladaPolloFrijol,
  },

  // ===================== SÁNDWICHES =====================
  {
    id: "sand-pollo-champi",
    category: "sandwiches",
    name: "Pollo & Champi",
    price: 24900,
    desc: "Pan ciabatta, mozzarella, lechuga, tomate, pepino agridulce & salsas de la casa.",
    tags: ["Top"],
    isVeggie: false,
    img: sandwichPolloChampi,
  },
  {
    id: "sand-chorizo",
    category: "sandwiches",
    name: "Chorizo Artesanal",
    price: 24900,
    desc: "Pan ciabatta, mozzarella, lechuga, tomate, pepino agridulce & salsas de la casa.",
    tags: [],
    isVeggie: false,
    img: sandwichChorizoArtesanal,
  },
  {
    id: "sand-cerdo-horno",
    category: "sandwiches",
    name: "Cerdo al Horno",
    price: 24900,
    desc: "Pan ciabatta, mozzarella, lechuga, tomate, pepino agridulce & salsas de la casa.",
    tags: [],
    isVeggie: false,
    img: sandwichCerdoAlHorno,
  },
  {
    id: "sand-jamon-pavo",
    category: "sandwiches",
    name: "Jamón de Pavo",
    price: 24900,
    desc: "Pan ciabatta, mozzarella, lechuga, tomate, pepino agridulce & salsas de la casa.",
    tags: [],
    isVeggie: false,
    img: sandwichJamonDePavo,
  },
  {
    id: "sand-lulito",
    category: "sandwiches",
    name: "Lulito",
    price: 13800,
    desc: "Medio pan ciabatta, jamón pavo, queso, reducción de lulo, lechuga & salsita de la casa.",
    tags: ["Mini"],
    isVeggie: false,
    img: sandwichLulito,
  },
  {
    id: "sand-atun-huevo",
    category: "sandwiches",
    name: "Atún & Huevo",
    price: 32000,
    desc: "Pan ciabatta, mozzarella, lechuga, tomate, pepino agridulce & salsas de la casa.",
    tags: ["Proteína"],
    isVeggie: false,
    img: sandwichAtunYHuevo,
  },
  {
    id: "sand-caprese",
    category: "sandwiches",
    name: "Caprese",
    price: 19900,
    desc: "Queso mozzarella, albahaca fresca, tomate & vinagreta de albahaca.",
    tags: ["Veggie"],
    isVeggie: true,
    img: sandwichCaprese,
  },
  {
    id: "sand-mix-vegetales",
    category: "sandwiches",
    name: "Mix Vegetales",
    price: 19900,
    desc: "Zanahoria, aceitunas, champiñones, pepino & pimentón agridulce, tomate, lechuga.",
    tags: ["Veggie"],
    isVeggie: true,
    img: sandwichMixVegetales,
  },

  // ===================== HAMBURGUESAS =====================
  {
    id: "hamb-pollo",
    category: "hamburguesas",
    name: "Pollo",
    price: 29800,
    desc: "Hamburguesa de pechuga de pollo, pan brioche, queso, piña caramelizada, cebolla encurtida, lechuga & salsa de albahaca.",
    tags: ["Top"],
    isVeggie: false,
    img: hamburguesaPollo,
  },
  {
    id: "hamb-veggie",
    category: "hamburguesas",
    name: "Veggie",
    price: 28600,
    desc: "Hamburguesa vegetariana, pan brioche, queso, piña caramelizada, cebolla encurtida, lechuga & salsa de albahaca.",
    tags: ["Veggie"],
    isVeggie: true,
    img: hamburguesaVeggie,
  },

  // ===================== BATIDOS =====================
  {
    id: "bat-frutos-blue",
    category: "batidos",
    name: "Frutos Blue",
    price: 15900,
    desc: "Mora, fresa, uva & helado.",
    tags: ["Cremoso"],
    isVeggie: true,
    img: batidoFrutosBlue,
  },
  {
    id: "bat-amarillo-mix",
    category: "batidos",
    name: "Amarillo Mix",
    price: 15900,
    desc: "Banano, mango, papaya & helado.",
    tags: ["Cremoso"],
    isVeggie: true,
    img: batidoAmarilloMix,
  },
  {
    id: "bat-maracuyada",
    category: "batidos",
    name: "Maracuyada",
    price: 15900,
    desc: "Maracuyá & leche condensada.",
    tags: ["Cremoso"],
    isVeggie: true,
    img: batidoMaracuyada,
  },
  {
    id: "bat-lulada",
    category: "batidos",
    name: "Lulada",
    price: 15900,
    desc: "Lulo, piña & leche condensada.",
    tags: ["Cremoso"],
    isVeggie: true,
    img: batidoLulada,
  },
  {
    id: "bat-coco-red",
    category: "batidos",
    name: "Coco Red",
    price: 16900,
    desc: "Mora, banano & crema de coco.",
    tags: ["Cremoso"],
    isVeggie: true,
    img: batidoCocoRed,
  },
  {
    id: "bat-lychee",
    category: "batidos",
    name: "Lychee Island",
    price: 16900,
    desc: "Lychees & crema de coco.",
    tags: ["Cremoso"],
    isVeggie: true,
    img: batidoLycheeIsland,
  },
  {
    id: "bat-chontacoco",
    category: "batidos",
    name: "Chontacoco",
    price: 16900,
    desc: "Chontaduro & crema de coco.",
    tags: ["Cremoso"],
    isVeggie: true,
    img: batidoChontacoco,
  },
  {
    id: "bat-limonada-coco",
    category: "batidos",
    name: "Limonada de coco",
    price: 15900,
    desc: "Limón & crema de coco.",
    tags: ["Cremoso"],
    isVeggie: true,
    img: batidoLimonadaDeCoco,
  },

  // ===================== BEBIDAS & CAFÉ =====================
  {
    id: "frut-rojos",
    category: "bebidas",
    name: "Frutos Rojos",
    price: 10900,
    desc: "Fresa, mora & cereza.",
    tags: ["Frutal"],
    isVeggie: true,
    img: bebidaFrutosRojos,
  },
  {
    id: "frut-amarillos",
    category: "bebidas",
    name: "Frutos Amarillos",
    price: 10900,
    desc: "Banano, mango & papaya.",
    tags: ["Frutal"],
    isVeggie: true,
    img: bebidaFrutosAmarillos,
  },
  {
    id: "frut-naranja-rose",
    category: "bebidas",
    name: "Naranja Rosé",
    price: 10900,
    desc: "Naranja & fresa.",
    tags: ["Frutal"],
    isVeggie: true,
    img: bebidaNaranjaRose,
  },
  {
    id: "frut-naranja-passion",
    category: "bebidas",
    name: "Naranja Passion",
    price: 10900,
    desc: "Maracuyá & naranja.",
    tags: ["Frutal"],
    isVeggie: true,
    img: bebidaNaranjaPassion,
  },
  {
    id: "frut-tropical",
    category: "bebidas",
    name: "Tropical",
    price: 10900,
    desc: "Banano, fresa, naranja & piña.",
    tags: ["Frutal"],
    isVeggie: true,
    img: bebidaTropical,
  },
  {
    id: "frut-spycitrus",
    category: "bebidas",
    name: "Spycitrus",
    price: 10900,
    desc: "Naranja, limón, piña & jengibre.",
    tags: ["Frutal"],
    isVeggie: true,
    img: bebidaSpycitrus,
  },
  {
    id: "frut-atardecer",
    category: "bebidas",
    name: "Atardecer",
    price: 10900,
    desc: "Maracuyá, mango & zanahoria.",
    tags: ["Frutal"],
    isVeggie: true,
    img: bebidaAtardecer,
  },/*
  {
    id: "frut-super-light",
    category: "bebidas",
    name: "Super Light",
    price: 10900,
    desc: "Piña, limón, apio, espinaca & pepino.",
    tags: ["Light"],
    isVeggie: true,
    img: bebidaSuperLight,
  },
  {
    id: "frut-acai-mix",
    category: "bebidas",
    name: "Açai Mix",
    price: 14900,
    desc: "Açai, banano & mora.",
    tags: ["Top"],
    isVeggie: true,
    img: bebidaAcaiMix,
  },
  {
    id: "frut-biche",
    category: "bebidas",
    name: "Biche",
    price: 13500,
    desc: "Mango biche, limón, Tajín & sal.",
    tags: ["Refrescante"],
    isVeggie: true,
    img: bebidaBiche,
  },
  {
    id: "soda-mora",
    category: "bebidas",
    name: "Soda de Mora",
    price: 13900,
    desc: "Con sirope de mora & jengibre.",
    tags: ["Soda"],
    isVeggie: true,
    img: sodaMora,
  },
  {
    id: "soda-lulo",
    category: "bebidas",
    name: "Soda de Lulo",
    price: 13900,
    desc: "Con reducción de lulo.",
    tags: ["Soda"],
    isVeggie: true,
    img: sodaLulo,
  },
  {
    id: "cafe-frappe",
    category: "bebidas",
    name: "Café Frappé",
    price: 13900,
    desc: "Café, leche & amor.",
    tags: ["Café frío"],
    isVeggie: true,
    img: cafeFrappe,
  },
  {
    id: "cafe-chai",
    category: "bebidas",
    name: "Chai Coffee",
    price: 16900,
    desc: "Café & té chai.",
    tags: ["Café frío"],
    isVeggie: true,
    img: chaiCoffee,
  },
  {
    id: "cafehelado",
    category: "bebidas",
    name: "Cafhelado",
    price: 16900,
    desc: "Café, milo & helado.",
    tags: ["Café frío"],
    isVeggie: true,
    img: cafhelado,
  },
  {
    id: "iced-latte",
    category: "bebidas",
    name: "Iced Latte",
    price: 12200,
    desc: "Espresso doble con leche & hielo.",
    tags: ["Café frío"],
    isVeggie: true,
    img: icedLatte,
  },
  {
    id: "prot-recover",
    category: "bebidas",
    name: "Recover Fit",
    price: 15900,
    desc: "Banano & fresa. (+ proteína BiPro opcional)",
    tags: ["Proteína"],
    isVeggie: true,
    img: proteinaRecoverFit,
  },
  {
    id: "prot-passion",
    category: "bebidas",
    name: "Passion Whey",
    price: 15900,
    desc: "Maracuyá & banano. (+ proteína BiPro opcional)",
    tags: ["Proteína"],
    isVeggie: true,
    img: proteinaPassionWhey,
  },
  {
    id: "prot-manipower",
    category: "bebidas",
    name: "ManíPower",
    price: 17200,
    desc: "Chocolate, banano & mantequilla de maní.",
    tags: ["Proteína"],
    isVeggie: true,
    img: proteinaManipower,
  },*/

  // ===================== BOWLS DE FRUTA =====================
  {
    id: "acai-bowl",
    category: "bowls_fruta",
    name: "Açai Bowl",
    price: 22900,
    desc: "Base de açai con granola, chía, fruta fresca & coco deshidratado.",
    tags: ["Top"],
    isVeggie: true,
    img: bowlAcai,
  },
  {
    id: "rojo-bowl",
    category: "bowls_fruta",
    name: "Rojo Bowl",
    price: 22900,
    desc: "Frutos Blue con granola, chía & coco deshidratado.",
    tags: [],
    isVeggie: true,
    img: bowlRojo,
  },
  {
    id: "amarillo-bowl",
    category: "bowls_fruta",
    name: "Amarillo Bowl",
    price: 22900,
    desc: "Frutos Amarillos con granola, chía & coco deshidratado.",
    tags: [],
    isVeggie: true,
    img: bowlAmarillo,
  },
];
