# 📖 Gerador de Frases Motivacionais

Aplicação desenvolvida com **React + TypeScript** que gera frases aleatórias de acordo com a categoria selecionada.

## 🚀 Tecnologias utilizadas

* ⚛️ React
* 🔷 TypeScript
* 🎨 CSS
* ⚡ Vite

---

## 📸 Preview

O projeto possui:

* Categorias de frases
* Geração aleatória de mensagens
* Interface simples e responsiva

Categorias disponíveis:

* Motivacional
* Reflexiva
* Bom Dia

---

## 📂 Estrutura do projeto

```bash
src/
 ├── assets/
 │    └── Logo.png
 ├── App.tsx
 ├── App.css
 ├── main.tsx
 └── index.css
```

---

## 🧠 Funcionalidades

### ✅ Seleção de categorias

O usuário pode escolher uma categoria de frases através dos botões.

### ✅ Geração aleatória

Ao clicar em **"Gerar frase"**, uma frase aleatória da categoria selecionada é exibida na tela.

### ✅ Tipagem com TypeScript

O projeto utiliza tipagem forte para garantir mais segurança e organização no código.

Exemplo:

```ts
type TipoCategoria =
  | "Motivacional"
  | "Reflexiva"
  | "Bom Dia"
```

---

## 🛠️ Como executar o projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2️⃣ Acesse a pasta

```bash
cd seu-repositorio
```

### 3️⃣ Instale as dependências

```bash
npm install
```

### 4️⃣ Execute o projeto

```bash
npm run dev
```

---

## 📌 Conceitos aplicados

* `useState`
* Componentização
* Renderização condicional
* Eventos no React
* Arrays e objetos
* Tipagem com TypeScript
* Manipulação aleatória com `Math.random`

---

## 📄 Explicação das tipagens

### `TipoCategoria`

Define quais categorias são permitidas:

```ts
type TipoCategoria =
  | "Motivacional"
  | "Reflexiva"
  | "Bom Dia"
```

---

### `Categoria`

Define a estrutura de cada categoria:

```ts
type Categoria = {
  readonly id: number
  readonly tipo: TipoCategoria
  readonly frases: readonly string[]
}
```

### Explicando:

| Propriedade       | Descrição                                          |
| ----------------- | -------------------------------------------------- |
| `readonly id`     | O ID não pode ser alterado                         |
| `tipo`            | Aceita apenas valores definidos em `TipoCategoria` |
| `readonly frases` | Lista imutável de frases                           |

---

## 🎲 Como a frase é sorteada

```ts
const numeroAleatorio = Math.floor(
  Math.random() * frasesCategoria.length
)
```

Esse código:

1. Obtém o tamanho do array
2. Gera um número aleatório
3. Seleciona uma frase da lista

---

## 📷 Exemplo de uso

```ts
setFrases(`"${frasesCategoria[numeroAleatorio]}"`)
```

Resultado:

```txt
"A disciplina transforma objetivos em realidade."
```

---

## ✨ Melhorias futuras

* [ ] Adicionar novas categorias
* [ ] Salvar frases favoritas
* [ ] Modo escuro
* [ ] Compartilhamento nas redes sociais
* [ ] Animações
* [ ] Integração com API

---

## 👨‍💻 Autor

Projeto desenvolvido para estudos com React e TypeScript.
"Dhanglerson Barral"
