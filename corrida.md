##PASSO a PASSO de CHAMAR UM UBER

1. abrir o aplicativo (entrada)
2. colocar o destino (entrada)
3. análise de preço (dinâmica) = 10 (processamento)
    1. selecionar um raio em volta do passageiro 
    2. calcula a quantidade de motoristas dentro de um raio e passageiros
    3. calcula a oferta e a demanda motorista x passageiros
4. escolher a categoria (processamento)
5. escolher método de pagamento (dinheiro) (entrada)
6. confirmar partida (entrada)
7. confirmar endereço do embarque (entrada)
8. calcula as informações da corrida(I/O) (processamento)
9.  ofereçe aos motoristas em um sistema de leilão (entrada)
10. aguardar o motorista aceitar a corrida 
11. O motorista aceita a corrida (entrada) abaixo(processamento)
    1. informações do passageiro e carrida vão para o motorista
    2. notifica a corrida ao passageiro e carrega o GPS
    3. mostra o destino do embarque
12. o motorista não aceita a corrida (entrada) abaixo(processamento)
    1. atualiza o preço da corrida
    2. oferece para outro motorista
13. Chega no local de embarque
14. verifica a placa 
15. verifica o motorista
16. embarca
17. o passageiro passa o código de segurança 
18. o motorista digita o código de segurança (entrada)
19. inicia a corrida (entrada)
20. chega no destino 
21. finalizar a corrida (entrada)
22. exibido o preço (saída)
23. gera o qr code automaticamente (processamento)
24. passageiro efetua o pagamento (saída)
25. efetua o pagamento (processando)
26. processa o pagamento (processando)
27. tela de sucesso (saída)
28. fim da corrida


Conta do Uber:
-R$5,00 (taxa para chamar o motorista) (constante)
-R$2,00 (valor por quilômetros rodado) (Constante)
-R$0,50 (valor por minutos da corrida) (constante)
-q      (quilômetros rodados)          (variável)
-m      (minutos por corrida)          (variável)

Exemplo de corrida: (quilômetro rodado = 8; minutos da corrida = 20;)

Total: (taxa para chamar o motorista) + (valor por quilômetros rodado * quilômetros rodado) + (valor por minutos da corrida * minutos da corrida) = x reais

Total: (5) + (2 * 8) + (0,50 * 20) = 5 + 16 + 10 = 31 reais


Exemplo de corrida: (quilômetro rodado = 8; minutos da corrida = 20;)

Total: (5) + (2 * 3) + (0,50 * 45) = 5 + 6 + 22,5 = 33,5 reais