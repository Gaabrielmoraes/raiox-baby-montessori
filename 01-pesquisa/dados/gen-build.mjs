// Gera dados/build.json da pesquisa Baby & Parenting / Montessori (Wattlebee, AU). Contrato do /montar-loja.
// Precos e politicas sairam dos concorrentes auditados (Tibatoes, toddla.co, Lovealotter, Montessori Paradise, Clever Toys Box).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const DADOS = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(DADOS, 'build.json');
const antigo = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {};

const P = { bg: '#FBF8F1', bg2: '#F3ECDD', primary: '#3F5E4E', accent: '#E3A82B', ink: '#2A2A26', good: '#5E7D6A', clay: '#C9704E', line: '#E4DCCB' };
const PAL = 'cream #FBF8F1, sand #F3ECDD, eucalyptus green #3F5E4E, wattle yellow #E3A82B, clay #C9704E, ink #2A2A26';

const logo = (tipo, descricao, art, formato) => ({
  tipo, descricao,
  prompt: 'REFERENCE HIERARCHY: No external reference image. The brand name WATTLEBEE is the only source of truth for the lettering; spell it exactly W-A-T-T-L-E-B-E-E, nothing else.\n\n' +
    'ART DIRECTION: ' + art + ' Palette: ' + PAL + '. Warm, calm, natural-wood Australian feel; soft and friendly but never babyish, neon or cartoon-loud.\n\n' +
    'BRAND FIDELITY: Wattlebee sells calm, screen-free Montessori busy boards and quiet-time toys to Australian parents and grandparents of children aged 1 to 3. The mark must read "calm, hands-busy, safe" at a glance and stay legible at 32px.\n\n' +
    'BRAND AND LEGAL CLEANUP: No competitor names or marks (toddla, Tibatoes, Montessori Generation, Lovealotter, Montessori Paradise, Melissa & Doug), no generic stock bee clip-art copied from other brands, no watermark, no trademark symbols.\n\n' +
    'QUALITY CONTROL: Vector-clean edges, correct spelling, balanced spacing, works in one colour. ' + formato,
});

const produtos = [
  {
    handle: 'switch-busy-board', titulo: 'Switch and Latch Busy Board', tipo: 'Busy Board', tags: ['Busy Board', 'Montessori', 'Bestseller', '1-3 years'], colecao: 'busy-boards',
    preco: '69.95', de: '119.95', sku: 'WB-BB-01', status: 'active',
    pdp: { eyebrow: 'The switches they are allowed to touch', lede: 'A solid wooden board of light switches, latches, a zip and a dial: everything your toddler reaches for around the house, made safe to flick a hundred times.', proof: '', season: 'Year-round · peak for Christmas and first birthdays' },
    descricao_html: '<p>Your toddler already loves the light switch, the gate latch and the zip on your bag. This board puts all of them in one safe place, so they can flick, open and turn while you finally drink your coffee hot.</p><ul><li><b>Real switches, safe to flick.</b> Rocker and toggle switches light up small LEDs. Nothing touches mains power.</li><li><b>Nothing to pull off.</b> Every switch, latch and knob is screwed through the board, not glued. Tested by pulling hard before it leaves our hands.</li><li><b>Battery box with a screw.</b> 2 x AA batteries in a compartment closed with a screw. No button or coin batteries anywhere.</li><li><b>Smooth, rounded wood.</b> Sanded edges, water-based paint.</li><li><b>Made for 1 to 3 years.</b> Builds fine motor skills: pinch, twist, push and slide.</li><li><b>Travel size.</b> Fits a nappy bag for cafes, flights and car trips.</li></ul><p>Always supervise play. Not suitable for children under 12 months.</p>',
    seo_titulo: 'Montessori Busy Board with Light Switches for Toddlers | Wattlebee',
    seo_descricao: 'Wooden Montessori busy board with LED light switches, latches and a zip for 1 to 3 year olds. Screwed-on parts, screw-closed AA battery box. Free shipping over $99 in Australia.',
    imagens: [],
  },
  {
    handle: 'quiet-time-activity-cards', titulo: 'Quiet Time Activity Cards (printable)', tipo: 'Digital Download', tags: ['Printable', 'Add-on', 'Screen-free'], colecao: 'quiet-time-on-the-go',
    preco: '9.95', de: '19.95', sku: 'WB-DG-01', status: 'active',
    pdp: { eyebrow: '30 screen-free ideas, ready to print', lede: 'A printable pack of 30 short activities that use the busy board and things you already have at home, sorted by age and by how much time you need.', proof: '', season: 'Year-round · school holidays' },
    descricao_html: '<p>For the days when you need twenty quiet minutes and your ideas have run out.</p><ul><li><b>30 activity cards</b> grouped by age (12 to 18 months, 18 to 24 months, 2 to 3 years).</li><li><b>Sorted by time:</b> 5, 10 and 20 minute ideas.</li><li><b>Uses what you have:</b> the busy board, pegs, a muffin tin, pom poms.</li><li><b>Instant download</b> (PDF, A4). Print at home as many times as you like.</li></ul><p>This is a digital product: nothing is shipped.</p>',
    seo_titulo: 'Printable Toddler Quiet Time Activity Cards (PDF) | Wattlebee',
    seo_descricao: '30 printable screen-free activity cards for toddlers aged 1 to 3, sorted by age and time. Instant PDF download.',
    imagens: [],
  },
  {
    handle: 'travel-busy-book', titulo: 'Travel Busy Book', tipo: 'Busy Book', tags: ['Busy Book', 'Travel', 'Upsell'], colecao: 'quiet-time-on-the-go',
    preco: '39.95', de: '59.95', sku: 'WB-BK-01', status: 'active',
    pdp: { eyebrow: 'Quiet hands in the car, the cafe and the plane', lede: 'A soft felt busy book with buttons, buckles, a zip, a lace and shapes to match. Light, silent and made to live in the nappy bag.', proof: '', season: 'Year-round · peak before holidays and flights' },
    descricao_html: '<p>The busy board stays home. This one goes everywhere.</p><ul><li><b>8 felt pages</b> of real-life skills: button, buckle, zip, lace, match.</li><li><b>No batteries, no noise.</b> Safe for a sleeping sibling and a quiet cafe.</li><li><b>Sewn-on pieces</b> with short tethers on every loose shape.</li><li><b>Light and soft</b> for car seats and planes.</li></ul><p>Always supervise play. For ages 18 months and up.</p>',
    seo_titulo: 'Felt Travel Busy Book for Toddlers, Quiet and Screen-Free | Wattlebee',
    seo_descricao: 'Soft felt busy book for toddlers with buttons, buckles, zips and laces. Silent, battery-free and light for car trips and flights.',
    imagens: [],
  },
  {
    handle: 'quiet-time-kit', titulo: 'Quiet Time Kit', tipo: 'Bundle', tags: ['Bundle', 'Best value', 'Gift'], colecao: 'christmas-gifts',
    preco: '99.95', de: '124.85', sku: 'WB-KT-01', status: 'active',
    pdp: { eyebrow: 'The gift they actually play with', lede: 'The Switch and Latch Busy Board, the Travel Busy Book and the Carry Bag in one box, with free shipping across Australia.', proof: '', season: 'Christmas · first birthday · grandparent gifts' },
    descricao_html: '<p>The set our customers end up buying piece by piece, for less, and ready to wrap.</p><ul><li><b>Switch and Latch Busy Board</b> ($69.95)</li><li><b>Travel Busy Book</b> ($39.95)</li><li><b>Busy Board Carry Bag</b> ($14.95)</li><li><b>Free shipping</b> anywhere in Australia.</li></ul><p>A gift note can be added at checkout.</p>',
    seo_titulo: 'Montessori Toddler Gift Set: Busy Board, Busy Book and Bag | Wattlebee',
    seo_descricao: 'Montessori gift set for 1 to 3 year olds: wooden busy board, felt travel busy book and carry bag. Free shipping in Australia.',
    imagens: [],
  },
  {
    handle: 'felt-christmas-tree', titulo: 'Toddler Felt Christmas Tree', tipo: 'Seasonal', tags: ['Christmas', 'Seasonal', 'Gift'], colecao: 'christmas-gifts',
    preco: '44.95', de: '69.95', sku: 'WB-XM-01', status: 'active',
    pdp: { eyebrow: 'The tree they are allowed to pull apart', lede: 'A soft felt wall tree with 30 hook-and-loop ornaments your toddler can put on, take off and put on again, while the real tree stays standing.', proof: '', season: 'November and December only' },
    descricao_html: '<p>Stop guarding the real tree. Give them one that is theirs.</p><ul><li><b>Felt tree</b> about 1 metre tall, hangs on the wall or a door.</li><li><b>30 soft ornaments</b> with hook-and-loop backs: stars, baubles, presents and a topper.</li><li><b>No glass, no hooks, no glitter.</b></li><li><b>Folds flat</b> to store for next year.</li></ul><p>Always supervise play. For ages 18 months and up.</p>',
    seo_titulo: 'Toddler Felt Christmas Tree with Velcro Ornaments | Wattlebee',
    seo_descricao: 'Felt Christmas tree for toddlers with 30 hook-and-loop ornaments. Safe, soft, no glass or glitter. Hangs on the wall and folds flat.',
    imagens: [],
  },
  {
    handle: 'busy-board-carry-bag', titulo: 'Busy Board Carry Bag', tipo: 'Add-on', tags: ['Add-on', 'Travel'], colecao: 'quiet-time-on-the-go',
    preco: '14.95', de: '24.95', sku: 'WB-AD-01', status: 'active',
    pdp: { eyebrow: 'Grab it on the way out', lede: 'A padded quilted bag that fits the busy board and the busy book, with a handle that hooks onto the pram.', proof: '', season: 'Year-round' },
    descricao_html: '<p>Keeps the board from scratching everything else in the nappy bag.</p><ul><li><b>Fits</b> the Switch and Latch Busy Board and the Travel Busy Book.</li><li><b>Padded quilted cotton</b> with a zip.</li><li><b>Pram handle</b> strap.</li></ul>',
    seo_titulo: 'Padded Carry Bag for Busy Board and Busy Book | Wattlebee',
    seo_descricao: 'Padded quilted carry bag that fits a toddler busy board and busy book, with a pram handle strap.',
    imagens: [],
  },
];

const colecoes = [
  { handle: 'busy-boards', titulo: 'Busy Boards', descricao_html: '<p>Wooden boards full of the switches, latches and zips toddlers reach for, made safe to play with.</p>' },
  { handle: 'quiet-time-on-the-go', titulo: 'Quiet Time On The Go', descricao_html: '<p>Silent, screen-free play for the car, the cafe and the plane.</p>' },
  { handle: 'christmas-gifts', titulo: 'Christmas Gifts', descricao_html: '<p>Gifts for 1 to 3 year olds that get played with long after Boxing Day.</p>' },
];

const concorrentesAuditados = [
  { loja: 'Tibatoes', dominio: 'tibatoes.com', n_imagens: 4, observacao: 'Montessori Switch Board $50,60: 4 imagens, still do painel + crianca brincando; vende por paginas de pre-venda (TDAH, autismo, viagem)' },
  { loja: 'toddla.co', dominio: 'toddla.co', n_imagens: 16, observacao: 'Toddla Montessori Busy Board $39,99: 16 imagens, crianca real brincando, closes das pecas, foto na mala de viagem' },
  { loja: 'Lovealotter', dominio: 'lovealotter.com', n_imagens: 13, observacao: 'LED Busy Switch Board $40,98: 13 imagens, interruptores acesos, crianca apertando' },
  { loja: 'Montessori Paradise', dominio: 'montessoriparadise.com', n_imagens: 4, observacao: 'Discovery Box $36,97: 4 imagens, still em fundo claro' },
  { loja: 'Clever Toys Box', dominio: 'clevertoysbox.com', n_imagens: 7, observacao: 'Montessori Busy Bees $39,97: 7 imagens, still + crianca' },
  { produto_handle: 'switch-busy-board', concorrente: 'Lovealotter', dominio: 'lovealotter.com', produto_concorrente_handle: 'montessori-wooden-led-busy-board', url_pdp: 'https://lovealotter.com/products/montessori-wooden-led-busy-board', n_imagens: 13, observacao: 'busy board de interruptores com LED $40,98 (de $80,98), anuncio no ar ha ~120 dias' },
  { produto_handle: 'quiet-time-activity-cards', concorrente: 'Tibatoes', dominio: 'tibatoes.com', produto_concorrente_handle: 'screen-free-advent-calendar-printable-pdf', url_pdp: 'https://tibatoes.com/products/screen-free-advent-calendar-printable-pdf', n_imagens: 1, observacao: 'PDF imprimivel $9,95 (de $19,95): o precedente real do bump digital (carrossel real de 1 imagem)' },
  { produto_handle: 'travel-busy-book', concorrente: 'toddla.co', dominio: 'toddla.co', produto_concorrente_handle: 'toddla-deer-busy-book', url_pdp: 'https://toddla.co/products/toddla-deer-busy-book', n_imagens: 12, observacao: 'busy book de feltro $49,99 (de $59,99)' },
  { produto_handle: 'quiet-time-kit', concorrente: 'toddla.co', dominio: 'toddla.co', produto_concorrente_handle: 'starter-montessori-bundle', url_pdp: 'https://toddla.co/products/starter-montessori-bundle', n_imagens: 11, observacao: 'bundle $99,99 (de $119,99)' },
  { produto_handle: 'felt-christmas-tree', concorrente: 'toddla.co', dominio: 'toddla.co', produto_concorrente_handle: 'toddla-montessori-christmas-tree', url_pdp: 'https://toddla.co/products/toddla-montessori-christmas-tree', n_imagens: 10, observacao: 'arvore de feltro $39,99, anunciada agora com "The tree they\'re allowed to pull"' },
  { produto_handle: 'busy-board-carry-bag', concorrente: 'Tibatoes', dominio: 'tibatoes.com', produto_concorrente_handle: 'soft-quilted-baby-travel-bag', url_pdp: 'https://tibatoes.com/products/soft-quilted-baby-travel-bag', n_imagens: 5, observacao: 'bolsa acolchoada $24,95' },
];

const ref = h => 'ver build.referencias_produtos[\'' + h + '\']';
const sequencia = [
  { posicao: 0, tipo: 'banner_home', status: 'nova', formato: 'banner_desktop', produto_handle: 'switch-busy-board', descricao: 'hero da home: crianca de ~18 meses no chao da sala apertando os interruptores do busy board; ao fundo, fora de foco, a mae tomando cafe na bancada', referencia_cena_arquivo: null,
    prompt: 'CONTEXTO: commercial e-commerce photography for an Australian toy-store home banner.\n\nREFERENCIA A ANEXAR: CENA = carousel images in \'Referencia de imagens - cena e prompt/switch-busy-board/carrossel-concorrente/\' (scene type only). PRODUTO = REFERENCIA PENDENTE until the Wattlebee sample is photographed.\n\nA PERSONA: a toddler of about 18 months in a plain cream knit, sitting on a wool rug; in the soft-focus background, a mother in her early 30s in linen, leaning on a timber kitchen bench with a coffee mug, relaxed.\n\nA CENA: Australian living room with timber floors and morning light through a big window, the child concentrated on flicking a light switch on the board, low camera at child height, 50mm.\n\nMUNDO DA MARCA: cream, sand, eucalyptus green and a touch of wattle yellow as real materials (rug, cushion, plant), not graphics.\n\nZONA DE TEXTO: keep the left third calm for headline and button.\n\nFOTORREALISMO + FORMATO: natural child skin and hands, correct proportions, no text in image. 1920x1080px.' },
  { posicao: 0, tipo: 'banner_home', status: 'nova', formato: 'banner_mobile', produto_handle: 'switch-busy-board', descricao: 'mesmo hero recomposto na vertical (nao e o desktop cortado)', referencia_cena_arquivo: null,
    prompt: 'CONTEXTO: commercial e-commerce photography, vertical mobile home banner.\n\nREFERENCIA A ANEXAR: same CENA and PRODUTO references as the desktop banner; use the approved desktop banner as identity reference for the child, the mother and the room.\n\nA PERSONA: the same toddler and mother from the desktop banner.\n\nA CENA: recomposed vertically, top-down angle over the board on the rug, small hands on the switches, the mother\'s coffee mug visible at the top edge.\n\nMUNDO DA MARCA: cream, sand, eucalyptus, morning light.\n\nZONA DE TEXTO: reserve the lower third for headline and button.\n\nFOTORREALISMO + FORMATO: natural hands, correct proportions, no text. 1080x1350px.' },
  { posicao: 1, tipo: 'still_produto', status: 'nova', produto_handle: 'switch-busy-board', descricao: 'busy board em fundo creme, foto principal da PDP, interruptores acesos', referencia_cena_arquivo: null, prompt: ref('switch-busy-board') },
  { posicao: 2, tipo: 'prova_seguranca', status: 'nova', produto_handle: 'switch-busy-board', descricao: 'prova de seguranca: mao adulta puxando com forca um interruptor que nao sai + close do parafuso da tampa da pilha (a prova que nenhum concorrente mostra)', referencia_cena_arquivo: null, prompt: ref('switch-busy-board') + '; cena: split image, left an adult hand pulling hard on a switch that stays fixed, right a close-up of the screw on the AA battery cover' },
  { posicao: 3, tipo: 'prova_sossego', status: 'nova', produto_handle: 'switch-busy-board', descricao: 'cena "cafe ainda quente": crianca concentrada no board enquanto a mae cozinha ao fundo (o desejo real do comprador)', referencia_cena_arquivo: null, prompt: ref('switch-busy-board') },
  { posicao: 4, tipo: 'still_produto', status: 'nova', produto_handle: 'travel-busy-book', descricao: 'busy book de feltro aberto mostrando 2 paginas', referencia_cena_arquivo: null, prompt: ref('travel-busy-book') },
  { posicao: 5, tipo: 'lifestyle_kit', status: 'nova', produto_handle: 'quiet-time-kit', descricao: 'kit completo (board + book + bolsa) embrulhado para presente sob uma arvore de Natal australiana', referencia_cena_arquivo: null, prompt: ref('quiet-time-kit') },
  { posicao: 6, tipo: 'lifestyle', status: 'nova', produto_handle: 'felt-christmas-tree', descricao: 'arvore de feltro na parede, crianca colocando um enfeite, arvore de verdade ao fundo intocada', referencia_cena_arquivo: null, prompt: ref('felt-christmas-tree') },
  { posicao: 7, tipo: 'mockup_digital', status: 'nova', produto_handle: 'quiet-time-activity-cards', descricao: 'mockup dos cartoes impressos sobre a mesa ao lado do busy board', referencia_cena_arquivo: null, prompt: ref('quiet-time-activity-cards') },
  { posicao: 8, tipo: 'still_produto', status: 'nova', produto_handle: 'busy-board-carry-bag', descricao: 'bolsa acolchoada pendurada no carrinho com o board dentro', referencia_cena_arquivo: null, prompt: ref('busy-board-carry-bag') },
];

const build = {
  _comentario: 'Contrato de execucao do /montar-loja gerado pelo /raio-x (Baby & Parenting, sub-nicho Montessori, Australia, nivel iniciante) em 2026-10-06. Precos em AUD com 2 casas, GST incluido. Custos de fornecedor sao ESTIMATIVA (nao medidos): confirmar com amostra e laudo de seguranca de brinquedo antes de anunciar.',
  marca: {
    nome: 'Wattlebee', pais: 'AU', moeda: 'AUD', idioma: 'en', paleta: P,
    fontes: { titulo: { nome: 'Quicksand', handle: 'quicksand_n7' }, corpo: { nome: 'Nunito Sans', handle: 'nunito_sans_n4' } },
    logo: null,
    announcement: 'Free shipping across Australia over $99 · 30-day happy-play guarantee · Screwed-on parts, no button batteries',
  },
  identidade_visual: {
    logos: [
      logo('wordmark', 'logo principal tipografico, versao escura para fundo claro e versao clara para fundo escuro', 'Rounded geometric sans-serif wordmark in the spirit of Quicksand bold, soft terminals, generous letter spacing. The two E\'s can share a tiny round wattle-flower dot above them, nothing more. Deliver two versions side by side: eucalyptus #3F5E4E on cream #FBF8F1, and cream on eucalyptus.', 'Square 2048x1024 canvas, transparent background version included.'),
      logo('icone_perfil', 'icone/favicon: um pompom de flor de wattle (circulo amarelo felpudo) sobre um pequeno interruptor de luz arredondado', 'Simple flat icon: a round wattle-flower pom-pom in wattle yellow #E3A82B sitting on top of a small rounded light-switch shape in eucalyptus #3F5E4E. Two colours max, readable at 32px.', '1024x1024px, centered, generous safe margin, also delivered on cream background.'),
      logo('capa_loja', 'capa/banner da loja: maos de crianca no busy board sobre tapete de la, luz da manha, espaco para texto', 'Photographic store cover with the wordmark small in the corner: close-up of a toddler\'s hands flicking switches on a natural wooden busy board on a cream wool rug, soft morning light, eucalyptus leaves in a vase at the edge.', '1920x700px, left half calm for headline. No text other than the wordmark.'),
      logo('capa_facebook', 'capa de rede social: 3 fotos lado a lado (board em casa, busy book no carro, arvore de feltro no Natal)', 'Social cover: three-panel photo strip: a toddler on the busy board at home, the felt busy book on a car seat, the felt Christmas tree on a wall; warm cream and eucalyptus tones, wordmark centered in a quiet cream band.', '1640x624px (Facebook cover safe area respected), also 1500x500 crop for X.'),
    ],
  },
  colecoes, produtos,
  addons: [
    { handle: 'quiet-time-activity-cards', titulo: 'Quiet Time Activity Cards (printable)', preco: '9.95', sku: 'WB-DG-01' },
    { handle: 'busy-board-carry-bag', titulo: 'Busy Board Carry Bag', preco: '14.95', sku: 'WB-AD-01' },
  ],
  bump_pdp: { handle: 'quiet-time-activity-cards' },
  upsell_carrinho: { handle: 'travel-busy-book' },
  menu: [
    { tipo: 'frontpage', titulo: 'Home' },
    { tipo: 'collection', titulo: 'Busy Boards', handle: 'busy-boards' },
    { tipo: 'collection', titulo: 'Quiet Time On The Go', handle: 'quiet-time-on-the-go' },
    { tipo: 'collection', titulo: 'Christmas Gifts', handle: 'christmas-gifts' },
    { tipo: 'page', titulo: 'Safety', handle: 'safety' },
  ],
  paginas: [
    { handle: 'contact', titulo: 'Contact', corpo_html: '<p>Questions about an order, a gift or safety? Email support@wattlebee.com.au (placeholder: replace with the real address). We reply within 1 business day, Monday to Friday, Australian Eastern time.</p><p>Please include your order number so we can help faster.</p>' },
    { handle: 'shipping-policy', titulo: 'Shipping Policy', corpo_html: '<p>We ship across Australia. Orders are processed in 1 to 2 business days and delivered in 6 to 12 business days after dispatch, with tracking sent by email.</p><p>Shipping is free on orders over $99 (including every Quiet Time Kit). Orders under $99 pay a flat $9.95. Prices include GST.</p><p>Ordering for Christmas? Place your order by 1 December for delivery before Christmas Day. If your tracking shows no movement for 10 business days, contact us and we will reship or refund.</p>' },
    { handle: 'refund-policy', titulo: 'Returns & Refunds', corpo_html: '<p><b>30-day happy-play guarantee.</b> If your little one does not love it, contact us within 30 days of delivery for a refund of the product price.</p><p>Damaged or faulty items are replaced at no cost. Digital downloads (printable cards) cannot be returned once downloaded.</p><p>Your rights under the Australian Consumer Law are not affected by this policy. To start a return, email us with your order number.</p>' },
    { handle: 'safety', titulo: 'Our Safety Promise', corpo_html: '<p>Every Wattlebee toy is chosen for children aged 1 to 3, so safety comes first.</p><ul><li><b>Screwed-on parts.</b> Switches, latches and knobs are screwed through the board, not glued. We pull-test every batch before it ships.</li><li><b>No button or coin batteries.</b> Our light-up boards use 2 x AA batteries in a compartment closed with a screw.</li><li><b>Tested to toy standards.</b> We only sell items from suppliers who provide a toy safety test report for small parts and materials (AS/NZS ISO 8124 or equivalent).</li><li><b>Supervise play.</b> Our toys are made for supervised play and are not suitable for children under 12 months unless stated.</li></ul><p>Found a problem? Email us right away and stop using the toy.</p>' },
    { handle: 'privacy-policy', titulo: 'Privacy Policy', corpo_html: '<p>Wattlebee collects only the information needed to process and deliver your order (name, email, delivery address, payment confirmation from our payment processor) and to send order updates. If you subscribe to emails, we use your email to send offers; you can unsubscribe anytime.</p><p>We do not sell your personal information. We use cookies and pixels (such as Meta) to measure ads and improve the store, in line with the Australian Privacy Principles. Contact support@wattlebee.com.au to access or delete your data.</p>' },
    { handle: 'terms-of-service', titulo: 'Terms of Service', corpo_html: '<p>By using wattlebee.com.au and buying from us you agree to these terms. Prices are in Australian dollars and include GST; the price at checkout is final. Product images are illustrative; wood grain and colours may vary slightly.</p><p>Our toys are designed for supervised play. Check the toy before each use and stop using it if any part is loose or damaged.</p><p>Returns follow our Returns &amp; Refunds policy and the Australian Consumer Law. These terms are governed by the laws of the Australian state where Wattlebee is registered.</p>' },
  ],
  tema: { settings: {} },
  imagens_pdp: {
    fonte: 'auditoria_carrossel_concorrentes',
    concorrentes_auditados: concorrentesAuditados,
    faixa_nicho: { min: 1, max: 16 },
    achado: 'As lojas do nicho mostram o busy board em still e com a crianca brincando, e algumas mostram a crianca concentrada, mas nenhuma prova em imagem a seguranca (a peca que nao sai quando puxada, a tampa da pilha parafusada), justamente a objecao numero 1 da Voz do Mercado depois do recall de 276 mil busy boards na Amazon. Essa imagem de prova e a brecha visual, junto com a cena "cafe ainda quente" que traduz o desejo real do comprador (20 minutos de sossego sem tela).',
    sequencia,
    conferencia_produto: [],
  },
  referencias_produtos: antigo.referencias_produtos || [],
};
fs.writeFileSync(OUT, JSON.stringify(build, null, 1));
console.log('build.json gravado:', produtos.length, 'produtos,', colecoes.length, 'colecoes');
