# Scroll Animation com GSAP e ScrollTrigger

Este código adiciona animações suaves para revelar elementos à medida que o usuário scrolla a página. Os elementos inicialmente ficam ocultos e aparecem com efeitos de transição ao entrarem na área visível da tela.

## Como Funciona

- **Elementos Alvo**: Os elementos com as classes `scroll-left`, `scroll-bottom`, `scroll-right` e `scroll-center` são animados com base na posição de rolagem.
- **GSAP ScrollTrigger**: Utiliza a biblioteca GSAP e seu plugin ScrollTrigger para ativar as animações quando os elementos entram na área visível.
- **Animação Personalizada**: Cada classe possui um efeito específico de entrada, como deslizar da esquerda, direita, ou de baixo para cima.

## Utilização

1. **Inclua os Scripts no HTML**:

   ```html
   <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
   ```

2. **Adicione as Classes no HTML**:

   ```html
   <div class="scroll-left">Conteúdo</div>
   <div class="scroll-bottom">Conteúdo</div>
   <div class="scroll-right">Conteúdo</div>
   <div class="scroll-center">Conteúdo</div>
   ```

3. **Personalize os Estilos (CSS)**:

   ```css
   .scroll-left {
     opacity: 0;
     transition: 0.5s;
     filter: blur(20px);
     transform: translate(-30px, 0);
   }

   .scroll-center {
     opacity: 0;
     transition: 0.5s;
     filter: blur(20px);
   }

   .scroll-bottom {
     opacity: 0;
     transition: 0.5s;
     transform: translate(0, 30px);
     filter: blur(20px);
   }

   .scroll-right {
     opacity: 0;
     transition: 0.5s;
     transform: translate(30px, 0);
     filter: blur(20px);
   }

   .ativo {
     opacity: 1;
     transition: 0.5s;
     transform: translate(0, 0);
     filter: blur(0px);
   }
   ```

4. **Adicione o Script**:

   ```javascript
   const scrolls = document.querySelectorAll(
     ".scroll-left, .scroll-bottom, .scroll-right, .scroll-center"
   );

   scrolls.forEach((scroll) => {
     ScrollTrigger.create({
       trigger: scroll,
       endTrigger: "body",
       start: "top 80%",
       toggleClass: "ativo",
     });
   });
   ```

## Resultado

Os elementos aplicados com essas classes serão revelados com efeitos suaves à medida que o usuário rola a página, proporcionando uma experiência visual mais dinâmica e interativa.

---

**Nota**: Este código depende do GSAP e do ScrollTrigger. Certifique-se de incluir as bibliotecas no HTML antes de utilizá-lo.
