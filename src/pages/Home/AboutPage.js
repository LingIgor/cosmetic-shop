import React from 'react';

const about = [
  {
    title: 'Історія бренду',
    text: "  На початку нашого шляху стояли мрія та пристрасть до природної краси. Заснований COMETING вирушив на завдання - створити косметику, яка не тільки підкреслює вашу природну красу, але і дбає про ваше здоров'я. Ми віримо, що кожна жінка заслуговує відчувати себе впевнено та чудово кожен день.",
  },
  {
    title: 'Місія та цінності',
    text: 'Місія COMETING - надихати жінок виявляти свою природну красу через інноваційні та екологічно чисті продукти. Ми прагнемо створювати косметику, яка підкреслює вашу індивідуальність, забезпечуючи при цьому найвищий стандарт якості.',
  },
  {
    title: 'Філософія продукції',
    text: 'У COMETING вірять у простоту та ефективність. Наші продукти містять лише найкращі природні інгредієнти, які дбають про вашу шкіру та дозволяють вам сяяти природною красою. Ми відмовляємося від шкідливих компонентів та тестування на тваринах, щоб кожна жінка могла користуватися нашою косметикою з чистою совістю.',
  },
  {
    title: 'Команда',
    text: "Наша команда - це група талановитих фахівців, які мають пристрасть до краси та здоров'я. Від наших фахівців з досліджень та розробок до техніків з виробництва, кожен член нашої команди присвячений створенню продуктів найвищої якості.",
  },
  {
    title: 'Прозорість',
    text: 'У COMETING важлива прозорість. Ми відверто ділимося складом наших продуктів та процесами виробництва. Віримо, що наші клієнти заслуговують знати, що вони наносять на свою шкіру.',
  },
  {
    title: 'Відео та фото',
    text: 'Поглибтеся в атмосферу COMETING через наші фото та відео. Від нашого косметичного лабораторії до усміхнених обличь задоволених клієнток - це все частина нашої красивої історії. Дивіться і переконайтеся в якості COMETING власними очима.',
  },
];

export const AboutPage = () => {
  return (
    <div>
      {about.map(({ title, text }) => {
        return (
          <>
            <h1 style={{ marginBottom: '15px' }}>{title}</h1>
            <p style={{ marginBottom: '30px' }}>{text}</p>
          </>
        );
      })}
    </div>
  );
};
