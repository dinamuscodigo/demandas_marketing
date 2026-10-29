// Ligação do quadro com o banco de dados (Supabase).
// Pegue os dois valores no Supabase: botão "Connect" no topo do projeto,
// ou Project Settings > API Keys (aba "Publishable and secret API keys").
// A chave "publishable" pode ficar visível no site: sem login, ninguém lê nem grava nada.
// NUNCA cole aqui a chave "secret" (sb_secret_...).
window.QUADRO_CONFIG = {
  SUPABASE_URL: "COLE_AQUI_A_PROJECT_URL",            // ex.: https://abcdefgh.supabase.co
  SUPABASE_ANON_KEY: "COLE_AQUI_A_PUBLISHABLE_KEY",   // começa com sb_publishable_
};
