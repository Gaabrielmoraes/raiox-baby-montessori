// Acrescenta ao dados-brutos.json (coleta bruta por dominio, intacta) a lista `lojas`
// com os numeros auditados por page_id e a `decisao_mercado`, que os revisores cruzam.
import fs from 'node:fs';
import path from 'node:path';
import { LOJAS, DADOS } from './dados-pesquisa.mjs';
const f = path.join(DADOS, 'dados-brutos.json');
const j = JSON.parse(fs.readFileSync(f, 'utf8'));
j.lojas = LOJAS.map(l => ({
  slug: l.slug, nome: l.nome, dominio: l.dominio, page_ids: l.pageIds,
  ativos: l.ativos, historico: l.historico, sobrevivencia_pct: l.sobrev != null ? Math.round(l.sobrev * 10) / 10 : null,
  anuncios_ativos: l.ativos, snapshot_em: '2026-10-06',
  modelo: l.modelo, veredito: l.veredito, nivel: l.nivel, score: l.score, defensabilidade: l.defens,
  produto_campeao: l.campeao.titulo, campeao_url: l.campeao.url, ticket: l.ticket,
  faturamento_mes: l.fat ? Math.round(l.fat) : null, selo_faturamento: l.fat ? 'estimado incerto' : 'nao estimado',
}));
j.decisao_mercado = { pais: 'AU', nome_pais: 'Austrália', moeda: 'AUD', idioma: 'en' };
fs.writeFileSync(f, JSON.stringify(j, null, 1));
console.log('dados-brutos.json enriquecido:', j.lojas.length, 'lojas');
