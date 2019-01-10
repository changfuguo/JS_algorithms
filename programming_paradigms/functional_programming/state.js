// With
var number = 1;
function increment() {
  return number++;
}
// глобальная переменная изменяется: number = 2
increment();

// Without
/*
Функции или компоненты без состояния выполняют задачи, словно каждый раз их запускают впервые.
Они не ссылаются или не используют в своем исполнении раннее созданные данные.
Отсутствие состояния обеспечивает ссылочную прозрачность.
Функции зависят только от их аргументов и не имеют доступа, не нуждаются в знании чего-либо вне их области видимости.
Чистые функции не имеют состояния.
 */
var number = 1;
function increment(n) {
  return n + 1;
}
// глобальная переменная НЕ изменяется: возвращает 2
increment(number);