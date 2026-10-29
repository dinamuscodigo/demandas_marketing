// Ligação do quadro com o banco de dados (Supabase).
// Pegue os dois valores no Supabase: botão "Connect" no topo do projeto,
// ou Project Settings > API Keys (aba "Publishable and secret API keys").
// A chave "publishable" pode ficar visível no site: sem login, ninguém lê nem grava nada.
// NUNCA cole aqui a chave "secret" (sb_secret_...).
window.QUADRO_CONFIG = {
  SUPABASE_URL: "https://ohittblcpemlinkrpyfx.supabase.co",            // ex.: https://abcdefgh.supabase.co
  SUPABASE_ANON_KEY: "sb_publishable_jL50r4O_f5QJQy_F9GbOww_3UQ-schw",   // começa com sb_publishable_
};
