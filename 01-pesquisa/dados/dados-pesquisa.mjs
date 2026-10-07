// Dados consolidados da pesquisa (Baby & Parenting > Montessori, alvo AU). Tudo aqui veio
// das coletas em dados/*.json; o que nao foi medido carrega o motivo.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const DADOS = path.dirname(fileURLToPath(import.meta.url));
export const RAIZ = path.dirname(DADOS);
const lerJson = f => { try { return JSON.parse(fs.readFileSync(path.join(DADOS, f), 'utf8')); } catch { return null; } };

export const build = lerJson('build.json');
export const matriz = lerJson('matriz-paises.json');
export const bench = lerJson('benchmark-setor.json');
export const voz = lerJson('voz-mercado.json');
export const midia = lerJson('midia-por-loja.json');
export const demandaCont = lerJson('demanda-contagens.json');
export const radar = lerJson('radar-subnichos.json');
export const reviews = lerJson('reviews.json');
export const manifesto = (() => { try { return JSON.parse(fs.readFileSync(path.join(RAIZ, 'paginas', 'criativos', 'manifesto.json'), 'utf8')); } catch { return { criativos: [] }; } })();

export const CONV = 0.0057;      // IRP ago/2026, Baby & Child (setor direto; piso, distorcido por ticket alto)
export const CPA_PCT = 0.1092;   // IRP ago/2026, Baby & Child, marketing / receita
export const MIN = 1512, MARCAS = 459, FILTRADOS = 584, MARCAS_F = 49;

const base = [
  { slug: 'toddla', nome: 'toddla.co', dominio: 'toddla.co', lado: 'busy board calmo', modelo: 'DROPSHIP DE MARCA', veredito: 'MODELAR', nivel: 'MÉDIO', score: 8, defens: 'CONSTRUÍVEL',
    eixos: [2, 1, 1, 2, 1, 1],
    pageIds: ['109026888570751', '111103548352756', '166589586540125'], ativos: 1059, historico: 3392, desde: '2021-04-17', plataforma: 'Shopify', apps: 'Klaviyo, Upcart, Clarity, Snap, TikTok', social: 'Instagram @toddla.co, 70 mil seguidores', google: 'anuncia no Google (200+ anúncios)',
    campeao: { titulo: 'Toddla™ Montessori Busy Board', preco: 39.99, de: 79.98, url: 'https://toddla.co/products/toddla-montessori-busy-board', img: 'prints/toddla-pdp.jpg' },
    ticket: 39.99, catalogo: '52 produtos (mediana $27,48, faixa $7,95 a $200): busy board, switch board, busy books, árvore de Natal de feltro e bundles de $49,99 a $149,99', fornecedorSinal: 'empresa australiana que despacha por um agente logístico na China para 190+ países; marca própria "Toddla™" em todo o catálogo',
    momento: 'crescendo: 1.059 dos 3.392 anúncios no ar (31%), anúncio do busy board no ar há ~99 dias, Tranco subindo (476 mil)',
    angulos: ['No batteries. No flashing lights. Just peace. 💛', 'Five minutes, coffee still hot', '5pm isn\'t a crisis anymore', 'We got copied.', 'The tree they\'re allowed to pull'],
    anatomia: { big: 'Brinquedo calmo: sem pilha, sem luz piscando, e a criança fica ocupada enquanto o adulto respira.', mec: 'Busy board de madeira com atividades da vida real (fecho, zíper, trinco), sem estímulo eletrônico.', hook: 'UGC em 1ª pessoa de mãe, com título de diário ("Five minutes, coffee still hot", "i actually cook dinner now"), rodado por 2 perfis de mãe além da página da marca.', presell: 'Sim: listas "/pages/7-montessori-toys" e "What To Buy the Grandkids This Christmas, From a Preschool Teacher of 28 Years"; o grosso (120 anúncios) vai direto ao produto.', obj: '"Vai prender a atenção mesmo?", respondida com vídeo de criança concentrada; "é cópia?", respondida com "We got copied" (a marca se posiciona como a original).' },
    cad: '~38 anúncios/dia (50 em ~1,3 dia), ~35 títulos distintos (duplicação ~1,4x): muito criativo novo de verdade',
    oQueCopiar: 'O ângulo "calma, sem pilha, sem tela", o UGC em 1ª pessoa com título de diário e o bundle como presente. Não copiar "We got copied" (só vale para quem é a original) nem a operação em 3 páginas e 190 países.',
    naoObtido: [['Visitas mensais', 'SimilarWeb bloqueou a coleta automática (CloudFront) nas 3 tentativas; extensão manual não usada por escolha do usuário', 'trafego.js com 3 tentativas e pausa crescente'], ['Contagem real de reviews', 'a home declara 11.000 reviews, mas nenhum app de review expõe contagem pública; tratado como alegação de marketing', 'reviews.mjs (JSON-LD) + coletar.mjs'], ['Comentários dos anúncios', 'o conector não entrega comentários', 'snapshot público (não aberto nesta rodada)']],
    retorno: 'política de troca não lida nesta rodada; frete AU $9,95 standard (5 a 10 dias) ou $14,95 express' },
  { slug: 'tibatoes', nome: 'Tibatoes', dominio: 'tibatoes.com', lado: 'busy board por pré-venda', modelo: 'DROPSHIP PURO', veredito: 'MODELAR', nivel: 'MÉDIO', score: 8, defens: 'ARBITRAGEM',
    eixos: [2, 1, 1, 2, 0, 2],
    pageIds: ['449754711560958'], ativos: 3100, historico: 11300, desde: '2025-11-19', plataforma: 'Shopify', apps: 'Loox, Upcart, Klaviyo, Klarna, Triple Whale, Clarity, Snap, TikTok', social: 'Instagram @tibatoes, 33 mil seguidores', google: 'anuncia no Google (200+ anúncios)',
    campeao: { titulo: 'TibaToes™ Montessori Switch Board', preco: 50.60, de: 67.48, url: 'https://tibatoes.com/products/tibatoes%E2%84%A2-montessori-switch-board', img: 'prints/tibatoes-pdp.jpg' },
    ticket: 33.71, catalogo: '250 produtos (mediana $33,71, faixa $5,62 a $275,73): busy boards e busy books, mas também óculos de natação, mochila, sapatinho barefoot e PDF imprimível de $9,95', fornecedorSinal: 'entrega em 6 a 10 dias úteis e paga as tarifas de importação pelo cliente; catálogo largo e genérico com marca "TibaToes™"',
    momento: 'escalando, mas virando generalista: 3.100 dos 11.300 anúncios no ar (27%); o busy board ficou ~55 dias no ar e a rajada de hoje é de óculos de natação; Tranco caindo (1,43 milhão)',
    angulos: ['The Screen Free Toy Every Child Needs.', 'The Travel Essential Every Parent Needs', 'The Swim Goggles Kids Put On Themselves 🥽', 'Coloring Without the Mess.'],
    anatomia: { big: '"O brinquedo sem tela que toda criança precisa": o busy board como substituto do tablet.', mec: 'Painel de interruptores e trincos que copia o que a criança já mexe em casa.', hook: 'Uma página de pré-venda por público: TDAH, autismo, viagem de carro, "setembro".', presell: 'Sim, e é o motor: "/pages/montessori-lander" (59 anúncios), "busy-board-september" (30), "roadtrip" (15), "adhd" (10), "autism" (6).', obj: '"Vai enjoar em 2 minutos", respondida com a pré-venda por perfil; "e a alfândega?", respondida com tarifas pagas pela loja e 30 dias de devolução.' },
    cad: 'rajada: 50 anúncios em ~53 minutos, 3 títulos (duplicação ~17x); ~3.100 anúncios ativos ao mesmo tempo',
    oQueCopiar: 'A pré-venda por público (viagem de carro, "sem tela") e o PDF imprimível de $9,95 como item extra digital. Não copiar a promessa médica implícita (TDAH, autismo) nem o catálogo de 250 itens.',
    naoObtido: [['Visitas mensais', 'SimilarWeb bloqueou a coleta automática (CloudFront) nas 3 tentativas', 'trafego.js com 3 tentativas e pausa crescente'], ['Contagem total de reviews', 'Loox sem endpoint público; ~100 reviews somados em 3 produtos amostrados (piso), contra "9.869 reviews" declarados na home (alegação)', 'reviews.mjs (JSON-LD)'], ['Comentários dos anúncios', 'o conector não entrega comentários', 'snapshot público']],
    retorno: '30 dias de devolução; frete grátis acima de A$100 na Austrália; tarifas de importação pagas pela loja' },
  { slug: 'lovealotter', nome: 'Lovealotter', dominio: 'lovealotter.com', lado: 'busy board de interruptores', modelo: 'DROPSHIP PURO', veredito: 'MODELAR', nivel: 'INICIANTE', score: 11, defens: 'ARBITRAGEM',
    eixos: [2, 2, 2, 2, 1, 2],
    pageIds: ['101882531954852'], ativos: 261, historico: 275, desde: '2020-04-21', plataforma: 'Shopify', apps: 'Judge.me, Klaviyo, Pinterest, Snap', social: 'Instagram @lovealotter, 1.574 seguidores', google: 'não anuncia no Google (contador 0)',
    campeao: { titulo: 'LED Busy Switch Board for Toddlers', preco: 40.98, de: 80.98, url: 'https://lovealotter.com/products/montessori-wooden-led-busy-board', img: 'prints/lovealotter-pdp.jpg' },
    ticket: 34.99, catalogo: '116 produtos (mediana $34,99, faixa $6,99 a $158,89): busy board de interruptores, quadro de feltro, árvore de Natal de feltro, busy cube', fornecedorSinal: 'vendor de terceiros no catálogo ("Montessori Generation", "little-kingdom.uk", "GILOVERY LLC"); empresa UNITRADE LLC; entrega de 6 a 12 dias úteis com tarifas incluídas',
    momento: 'estável e enxuto: 261 dos 275 anúncios no ar (95%), anúncio do busy board de interruptores no ar há ~120 dias',
    angulos: ['Finally, A Toy They\'re Allowed To Touch', 'Does your toddler touch EVERY switch in the house?', '"He didn\'t even ask for the iPad!"', '⭐⭐⭐⭐⭐50% OFF - Today Only!'],
    anatomia: { big: 'Finalmente um brinquedo que ele PODE mexer: os interruptores da casa, liberados.', mec: 'Interruptores reais com LED num painel de madeira.', hook: 'Pergunta de reconhecimento ("Does your toddler touch EVERY switch in the house?") + depoimento ("He didn\'t even ask for the iPad!").', presell: 'Não achado: o anúncio vai direto à página do produto.', obj: 'Preço, respondida com "50% OFF - Today Only" em quase todo título.' },
    cad: '~3,8 anúncios/dia (50 em ~13 dias), 9 títulos (duplicação ~5,6x)',
    oQueCopiar: 'O ângulo "o interruptor que ele pode tocar" e o gancho de pergunta. É o molde mais simples: um produto, anúncio direto para a página, sem pré-venda. Não copiar o "50% OFF - Today Only" permanente.',
    naoObtido: [['Visitas mensais', 'SimilarWeb bloqueou a coleta automática (CloudFront)', 'trafego.js com 2 tentativas'], ['Reviews', 'Judge.me instalado mas sem contagem pública nas páginas amostradas', 'reviews.mjs (JSON-LD)'], ['Comentários dos anúncios', 'o conector não entrega comentários', 'snapshot público']],
    retorno: 'frete $6,99 nos EUA, grátis acima de $70; janela de devolução não declarada na política lida' },
  { slug: 'paradise', nome: 'Montessori Paradise', dominio: 'montessoriparadise.com', lado: 'presente para avó', modelo: 'DROPSHIP PURO', veredito: 'MODELAR', nivel: 'INICIANTE', score: 10, defens: 'ARBITRAGEM',
    eixos: [2, 1, 1, 2, 2, 2],
    pageIds: ['1036853126167354'], ativos: 119, historico: 338, desde: '2026-01-21', plataforma: 'Shopify', apps: 'Judge.me, Klaviyo, Klarna, Pinterest, Snap, Clarity', social: 'nenhum perfil achado', google: 'anuncia no Google (8 anúncios)',
    campeao: { titulo: 'Montessori Discovery Box', preco: 36.97, de: 49.97, url: 'https://montessoriparadise.com/products/montessori-beaded-treasure-box', img: 'prints/paradise-pdp.jpg' },
    ticket: 36.97, catalogo: '43 produtos (mediana $36,97, faixa $4,99 a $144,97): discovery box, busy books por animal, busy board, brinquedo sensorial de puxar, árvore de feltro', fornecedorSinal: 'endereço de escritório virtual em Londres (71-75 Shelton Street); loja aberta em 01/2026 alegando "80K+ happy customers"; 100% tráfego pago',
    momento: 'lançamento de Natal: 119 dos 338 anúncios no ar (35%), loja de 9 meses; campanha de avó começou há ~15 dias',
    angulos: ['10 Christmas Gifts Grandma Won\'t Regret Buying 🎁', 'Grandma\'s Favorite Gift 👵', 'The Screen-Free Favorite Kids Actually Use', 'A Purchase You Will Never Regret.'],
    anatomia: { big: 'O presente que a avó não se arrepende de comprar.', mec: 'Lista curada "por idade" que tira da avó o medo de errar o presente.', hook: 'Título de lista para avó ("10 Christmas Gifts Grandma Won\'t Regret Buying").', presell: 'Sim: "/pages/christmas-gifts-grandmas-are-buying" e "/pages/10-guilt-free-toys-to-spoil-your-grandchild" antes do produto.', obj: '"E se a criança não gostar?", respondida com 45 dias de devolução e "a purchase you will never regret".' },
    cad: '~9,4 anúncios/dia (50 em ~5,3 dias), 8 títulos (duplicação ~6x)',
    oQueCopiar: 'A lista de presentes para avó como pré-venda de Novembro e Dezembro e a garantia longa. Não copiar "80K+ happy customers" (loja de 9 meses: alegação impossível de provar).',
    naoObtido: [['Visitas mensais', 'SimilarWeb bloqueou a coleta automática (CloudFront)', 'trafego.js com 2 tentativas'], ['Comentários dos anúncios', 'o conector não entrega comentários', 'snapshot público'], ['Prazo de entrega', 'página de política de envio retornou 404', 'WebFetch em /policies/shipping-policy e /pages/faq']],
    retorno: '45 dias de devolução "no questions asked"; frete grátis acima de $70' },
  { slug: 'clevertoys', nome: 'Clever Toys Box', dominio: 'clevertoysbox.com', lado: 'anúncio de catálogo', modelo: 'DROPSHIP PURO', veredito: 'OBSERVAR', nivel: 'INICIANTE', score: 10, defens: 'ARBITRAGEM',
    eixos: [2, 1, 2, 1, 2, 2],
    pageIds: ['227751457082819'], ativos: 19, historico: 333, desde: '2024-01-20', plataforma: 'Shopify', apps: 'Judge.me, Klaviyo, Pinterest', social: 'Instagram @clevertoysbox, 357 seguidores', google: 'não anuncia no Google (contador 0)',
    campeao: { titulo: 'Montessori Busy Bees', preco: 39.97, de: 55.97, url: 'https://clevertoysbox.com/products/montessori-busy-bees', img: 'prints/clevertoys-pdp.jpg' },
    ticket: 38.97, catalogo: '124 produtos (mediana $38,97, faixa $19,97 a $98,97): jogos de pinça, cenoura de encaixe, bola mordedor, lagarta musical', fornecedorSinal: 'origem e prazo de envio não declarados na política (sinal típico de dropshipping); anúncios em dólar canadense',
    momento: 'enxuta e parada no vencedor: 19 dos 333 anúncios no ar (6%), um único anúncio de catálogo rodando há ~91 dias',
    angulos: ['Montessori Carrot Set | Montessori Baby Feeding Set | Montessori Busy Bees | ...'],
    anatomia: { big: 'Vitrine de 6 brinquedos Montessori num anúncio só.', mec: 'Anúncio dinâmico de catálogo (o Facebook escolhe o produto).', hook: 'Imagem do produto + nome; sem história.', presell: 'Não: o anúncio abre a home.', obj: 'Não trabalha objeção no anúncio; a loja promete garantia de 1 ano.' },
    cad: '~0,2 anúncio/dia (19 em ~90 dias), 1 título de catálogo',
    oQueCopiar: 'Só a ideia de, depois de validar, ligar um anúncio de catálogo barato que fica meses no ar. Pouca escala para servir de molde: fica para observar.',
    naoObtido: [['Visitas mensais', 'não rodado: SimilarWeb já bloqueava o IP quando chegou a vez desta loja', 'trafego.js (fila interrompida)'], ['Reviews', 'Judge.me sem contagem pública; a home declara 415 reviews (alegação)', 'reviews.mjs'], ['Comentários dos anúncios', 'o conector não entrega comentários', 'snapshot público']],
    retorno: 'devolução "no questions asked" (prazo não declarado), garantia de 1 ano, frete grátis acima de $75' },
];

// faturamento: SimilarWeb bloqueado; so a Paradise tem base de proxy por reviews verificados (117 em 11 produtos, piso)
const PROXY = { paradise: { pedidosMes: [460, 1380], ticket: 36.97, base: '117 reviews verificados (JSON-LD de 11 produtos, piso) ÷ taxa de review de 1% a 3% = 3.900 a 11.700 pedidos em ~8,5 meses de loja; as datas dos reviews não foram conferidas (o JSON-LD não traz data), então parte pode ser review importado do fornecedor e a conta tende a superestimar' } };

export const LOJAS = base.map(l => {
  const sobrev = l.historico && l.historico !== l.ativos ? l.ativos / l.historico * 100 : null;
  const p = PROXY[l.slug];
  const fatMin = p ? p.pedidosMes[0] * p.ticket : null, fatMax = p ? p.pedidosMes[1] * p.ticket : null;
  const fat = p ? (fatMin + fatMax) / 2 : null;
  return { ...l, visitas: null, sobrev, fat, fatMin, fatMax, midiaMes: fat ? fat * CPA_PCT : null, proxy: p || null };
});

// Economia por pedido da Wattlebee, em AUD (cambio premissa: US$1 = A$1,52)
export const ECON = (() => {
  const core = 69.95, freteCobrado = 9.95, limiarFrete = 99;
  const custo = 16, frete = 12;            // produto US$8-14 (centro ~US$10,5) e frete US$6-10 para AU, em AUD; estimativa
  const taxaPct = 0.03, cpaCons = 35;
  const receitaCore = core + freteCobrado, taxa = receitaCore * taxaPct, cpaIrp = receitaCore * CPA_PCT;
  const bump = 9.95, bumpCusto = 0, bumpAceite = 0.30;          // PDF digital
  const ups = 39.95, upsCusto = 18, upsAceite = 0.12;          // busy book (custo + frete estimado)
  // quem aceita o busy book passa de A$99 e ganha frete gratis
  const aov = core + bump * bumpAceite + ups * upsAceite + freteCobrado * (1 - upsAceite);
  const custoEsc = custo + frete + upsCusto * upsAceite + aov * taxaPct;
  const kit = 99.95, kitCusto = 28 + 18 + 5;
  return {
    core, freteCobrado, limiarFrete, receitaCore, custo, frete, taxa, taxaPct, cpaCons, cpaIrp,
    margemCoreCons: receitaCore - custo - frete - taxa - cpaCons,
    margemCoreIrp: receitaCore - custo - frete - taxa - cpaIrp,
    bump, bumpCusto, bumpAceite, ups, upsCusto, upsAceite, aov, custoEsc,
    margemEscCons: aov - custoEsc - cpaCons,
    margemEscIrp: aov - custoEsc - aov * CPA_PCT,
    kit, kitCusto, margemKitCons: kit - kitCusto - kit * taxaPct - cpaCons,
    cpaEquilibrioCore: receitaCore - custo - frete - taxa,
    testeDia: 60, testeDias: 7, amostra: 120, shopify: 60,
  };
})();
ECON.investimentoTeste = ECON.testeDia * ECON.testeDias + ECON.amostra + ECON.shopify;

export const CONV_PCT = CONV * 100;
export const CPA_PCT_V = CPA_PCT * 100;
