#### O FaleMais é um projeto desenvolvido para fazer uma chamada de uma cidade para outra pagando uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs de origem e destino. Utilizando as tecnologias _Typescript, React e NextJS_.

## **:rocket: Objetivo**

##### O projeto tem como finalidade disponibilizar uma página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o plano FaleMais.

<h1 align=center>
<img width="400" height="500" src="https://i.imgur.com/n85BqLM.png" />
<img width="400" height="500" src="https://i.imgur.com/zRmoXeL.png" />

</h1>

## **:computer: Tecnologias**

#### **Front-End** ([React](reactjs.org) + [TypeScript](https://www.typescriptlang.org/))

- **[Next.js](https://nextjs.org/)**
- **HTML**
- **CSS**

#### **Utilitários**

- Protótipo: **[Figma](https://www.figma.com/)** &rarr; **<kbd>[Protótipo (FaleMais)](https://www.figma.com/file/dDD7B47ZsZr65gIE3VKIgm/FaleMais)</kbd>**
- Ícones: **[React-Icons](https://react-icons.github.io/react-icons/)**

## **:wine_glass: COMO UTILIZAR**

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina.

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[nvm](https://github.com/nvm-sh/nvm)</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando neste <kbd>[link](https://yarnpkg.com/)</kbd>.

Após ter o **Node** instalado, instale as dependências do **React** instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório (para o gerenciamento de commits), no diretório do **projeto**. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ yarn
ou
$ npm install
```

Após ter instalado todas as dependências, você poderá gerar a build do projeto para o seu dispositivo com:

```sh
$ yarn dev
ou
$ npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

## **:octocat: COMO CONTRIBUIR**

- Verifique as **Issues** que estão abertas e se já não existe alguma com a sua feature;
- Abra uma **Issue** com o nome e descrição da sua feature e assine com o seu usuário informando que irá fazê-la;
- Faça um **[fork](https://help.github.com/pt/github/getting-started-with-github/fork-a-repo)** do repositório;
- Entre no sua página do GitHub e faça um **clone** do seu **fork**;
- Crie uma _branch_ com o nome da sua feature: `git chechout -b feat/minhaFeature`;
- Faça as alterações necessárias no código ou na documentação;
- Instale as dependências do _commitlint_ na raíz do projeto para a verificação dos commits: `npm install` ou `yarn`;
- Faça o _commit_ das suas alterações seguindo as [convenções de commit](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/), adicione na descrição o id da sua Issue em parênteses e lembre de fechar a sua Issue com o id no rodapé do commit:

```
  <tipo>(escopo opcional): <descrição> (#x)

  [corpo do commit]

  Close #x
```

Exemplo:

```sh
  feat: adicionado componente para tal coisa (#52)

  Foi adicionado um componente para tal coisa com o objetivo de melhorar tal coisa, deixando o projeto de tal maneira.

  Close #52
```

- Faça um _push_ para a sua _branch_: `git push origin feat/minhaFeature`;
- Agora é só abrir um _pull request_ no repositório que você fez o _fork_ e assim que acontecer o _merge_ sua Issue será fechada e suas alterações irão fazer parte do projeto;
- Depois que o _merge_ da sua pull request for feito, você pode deletar a sua _branch_.

\* **Obrigado por contribuir!** ❤️ :facepunch: :blush:
