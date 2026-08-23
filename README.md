# Yummy - Plataforma de Assinatura de Refeições Saudáveis

## 🎯 Objetivo do Projeto

A **Yummy** é uma aplicação web focada em oferecer praticidade através de planos de assinatura de refeições saudáveis e convenientes. O objetivo principal do sistema é permitir que os usuários naveguem pelos serviços da empresa e realizem a personalização completa de seus pedidos. A aplicação guia o usuário através de um fluxo intuitivo onde ele pode:

* Escolher entre diferentes modalidades, como Plano Comum, Fitness e Parceiros.

* Personalizar o cardápio selecionando os pratos e alimentos desejados.

* Adicionar bebidas tradicionais, sucos ou opções zero açúcar ao pacote.

* Agendar as entregas selecionando dinamicamente os dias e horários de preferência em um calendário interativo.


## 🛠️ Tecnologias Utilizadas

Este projeto front-end foi desenvolvido utilizando a seguinte stack:

* **HTML5**: Estruturação semântica das páginas e formulários de seleção.

* **CSS3**: Estilização customizada da interface, implementação de animações de *hover* nos *cards* de produtos e design responsivo utilizando *Media Queries* para adaptação em dispositivos móveis.

* **JavaScript (Vanilla)**: Responsável pela interatividade da aplicação, incluindo a manipulação do DOM, validação de campos (impedindo o avanço sem selecionar alimentos) e a geração dinâmica do grid do calendário de agendamentos.

* **Bootstrap 4.1.3**: Framework CSS integrado para acelerar a construção do *layout*, utilizando o sistema de grid e componentes como barra de navegação e carrossel de imagens.


## 💡 Aprendizados Consolidados

O desenvolvimento deste projeto permitiu a consolidação de importantes conceitos de engenharia de *front-end* e design de interface:

* **Manipulação Dinâmica de UI**: O desenvolvimento do calendário exigiu lógica em JavaScript para mapear os meses, calcular os dias da semana e armazenar os horários selecionados em arrays na memória do navegador.

* **Validação e Prevenção de Erros**: Implementação de escutas de eventos (*event listeners*) para garantir que o fluxo do usuário não seja quebrado, exibindo alertas caso as seleções obrigatórias de alimentos ou planos não sejam feitas.

* **Design Responsivo e Fluido**: Adaptação prática do sistema de *grid* do CSS para garantir que os cartões de produtos e o próprio calendário se ajustem adequadamente a telas menores (como *smartphones* com largura máxima de 480px) sem quebrar o layout.