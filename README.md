IMC 2.0

Requisitos
Certifique-se de ter o ambiente de desenvolvimento React Native configurado corretamente em sua máquina antes de executar este código.

Instalação
Clone o repositório ou baixe os arquivos em seu computador.
Abra o terminal e navegue até o diretório do projeto.
Execute o comando npm install para instalar as dependências necessárias.
Execução
Conecte seu dispositivo móvel ou inicie um emulador.
No terminal, execute o comando npm start para iniciar o servidor de desenvolvimento.
Escaneie o código QR exibido no terminal usando o aplicativo Expo no seu dispositivo móvel.
O aplicativo será carregado no seu dispositivo e você poderá interagir com ele.
Estrutura do código

Importações
O código começa importando os componentes necessários do React Native e do react-navigation. Esses componentes são usados para criar a estrutura de navegação entre as telas do aplicativo.

Run 
Va na pasta client pelo terminal e digite "npx expo start" e em outro terminal na pasta server digite "npm run dev"
Componente App
A função App é o componente raiz do aplicativo. Ele envolve todo o aplicativo com o NavigationContainer, que é um componente fornecido pela biblioteca react-navigation e é responsável por gerenciar a navegação.

Dentro do NavigationContainer, há um Stack.Navigator que define as telas do aplicativo. Cada tela é definida como um Stack.Screen com um nome e um componente associado. No exemplo, as telas disponíveis são "Home", "Login", "Cadastro" e "PageCalculo".

Estilos
A constante styles define os estilos CSS-in-JS para o componente raiz do aplicativo. Esses estilos são aplicados ao componente View no código.
