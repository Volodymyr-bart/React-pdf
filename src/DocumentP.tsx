const DocumentF0103308 = () => {
  return (
    <>
      <div className="container-document">
        <div className="number__statement">
          <span>F0103406</span>
        </div>

        <div className="header">
          <div className="statement__stamp">
            <p>Відмітка про одержання</p>
            <p>(штамп контролюючого органу)</p>
          </div>

          <div className="statement__approved">
            <h4>ЗАТВЕРДЖЕНО</h4>
            <p>Наказ Міністерства фінансів України</p>
            <p>24 листопада 2022 року № 394 </p>
            <p>
              (у редакції наказу Міністерства фінансів України від 15 грудня
              2022 року № 438)
            </p>
          </div>
        </div>

        <div className="statement__blocks">
          <div className="statement__block-top">
            <div className="statement__list">1</div>
            <div className="statement__title">
              <h2>
                ПОДАТКОВА ДЕКЛАРАЦІЯ ПЛАТНИКА ЄДИНОГО ПОДАТКУ - ФІЗИЧНОЇ ОСОБИ -
                ПІДПРИЄМЦЯ
              </h2>
              <p>у якого податковий (звітний) період квартал ***</p>
            </div>
            <div className="statement__which-one">
              <table>
                <tr>
                  <th>01 </th>
                  <th>HZ</th>
                  <th>Звітна</th>
                </tr>
                <tr>
                  <th>02</th>
                  <th>HZN</th>
                  <th>Звітна нова</th>
                </tr>
                <tr>
                  <th>03 </th>
                  <th>HZU </th>
                  <th>Уточнююча</th>
                </tr>
                <tr>
                  <th>04</th>
                  <th>HD</th>
                  <th>Довідково*</th>
                </tr>
              </table>
            </div>
          </div>

          <div className="statement__which-one">
            <div className="statement__list">2</div>
            <div className="statement-tax__reporting-period">
              <p>Податковий (звітний) період:</p>
              <div className="reporting-period__position">
                <table className="reporting-period__table-left">
                  <tr>
                    <th>H1KV</th>
                    <th>І квартал</th>
                    <th>HHY</th>
                    <th>півріччя</th>
                    <th>H3KV</th>
                    <th>три квартали</th>
                    <th>HY</th>
                    <th>рік</th>
                    <th>HZM</th>
                  </tr>
                </table>

                <table className="reporting-period__table-right">
                  <tr>
                    <th>HZY</th>
                    <th className="className-none">року</th>
                  </tr>
                </table>
              </div>

              <div className="statement-tax__reporting-bottom">
                <p>(необхідне позначити) </p>
                <p>(місяць)** </p>
              </div>
            </div>
          </div>

          <div className="statement__which-one">
            <div className="statement__list">3</div>
            <div className="statement-tax__specified-title">
              <p>Податковий (звітний) період, який уточнюється</p>
              <div className="statement-tax__specified">
                <div className="statement-tax__specified-table">
                  <table className="statement-tax__tables">
                    <tr>
                      <th>H1KVP</th>
                      <th>І квартал</th>
                      <th>HHYP</th>
                      <th>півріччя </th>
                      <th>H3KVP</th>
                      <th>три квартали </th>
                      <th>HYP</th>
                      <th>рік</th>
                    </tr>
                  </table>

                  <table>
                    <tr>
                      <th>HZYP</th>
                      <th className="className-none">року</th>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="statement-tax__specified_bottom">
                <p>(необхідне позначити) </p>
              </div>
            </div>
          </div>

          <div className="statement__which-one">
            <div className="statement__list">4</div>
            <table className="table-determination__control">
              <tr>
                <th>HSTI</th>
              </tr>
            </table>
          </div>
          <p className="table-determination__control-text">
            (найменування контролюючого органу, до якого подається звітність)
          </p>

          <div className="statement__which-one">
            <div className="statement__list">5</div>
            <table className="table-payer">
              <tr>
                <th>Платник</th>
              </tr>
            </table>
            <table className="table-payer__name">
              <tr>
                <th>HNAME</th>
              </tr>
              <tr>
                <th></th>
              </tr>
            </table>
          </div>

          <p className="table-payer__control-text">
            (прізвище, ім'я, по батькові (за наявності) платника податків згідно
            з реєстраційними документами)
          </p>

          <div className="statement__which-one">
            <div className="statement__list">6</div>
            <table className="table__adress">
              <tr>
                <th className="table__adress-thead">Податкова адреса</th>
                <th>HLOC</th>
              </tr>
              <tr>
                <th></th>
              </tr>
              <tr>
                <th>(податкова адреса (місце проживання) платника податку) </th>
              </tr>
              <tr>
                <th>Адреса електронної пошти</th>
                <th>HEMAIL</th>
                <th>Телефон</th>
                <th>HTEL</th>
              </tr>
            </table>
          </div>

          <div className="statement-which__with-space">
            <div className="statement__list">7</div>
            <div className="statement__registration-card">
              Реєстраційний номер облікової картки платника податків або серія
              (за наявності) та номер паспорта
              <sup>1</sup>
            </div>
            <div className="statement__registration-number">HTIN</div>
          </div>

          <div className="statement__which-one">
            <div className="statement__list">8</div>
            <table className="statement-table__special-text">
              <tr>
                <th>Особливі відмітки </th>
              </tr>
              <tr>
                <th>8.1</th>
                <th>M081</th>
                <th>
                  платника податку, що подає декларацію за останній податковий
                  (звітний) період, на який припадає дата державної реєстрації
                  припинення <sup>2</sup>
                </th>
              </tr>
              <tr>
                <th>8.2</th>
                <th>M082</th>
                <th>
                  платника податку, що подає декларацію за останній податковий
                  (звітний) період, в якому здійснено перехід на сплату інших
                  податків і зборів <sup>2</sup>
                </th>
              </tr>
            </table>
          </div>

          <h3 className="text-center">
            І. ЗАГАЛЬНІ ПОКАЗНИКИ ПІДПРИЄМНИЦЬКОЇ ДІЯЛЬНОСТІ{" "}
          </h3>

          <div className="statement__generel-indicators">
            <div className="statement__list">9</div>
            <table>
              <tr>
                <th>
                  Фактична чисельність найманих працівників у звітному періоді
                  (осіб)
                </th>
                <th className="table__indicators-width">HNACTL</th>
              </tr>
            </table>
          </div>

          <div className="statement__type-activity">
            <div className="statement__list">10</div>
            <table>
              <tr>
                <th className="statement__type-title">
                  Види підприємницької діяльності у звітному періоді3 :
                </th>
              </tr>
              <tr>
                <th className="table__activity-width">Код згідно з КВЕД</th>
                <th>Назва згідно з КВЕД</th>
              </tr>
              <tr>
                <th>T1RXXXXG1S</th>
                <th>T1RXXXXG2S</th>
              </tr>
              <tr>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </table>
          </div>

          <h3 className="text-center">
            ІІ. ПОКАЗНИКИ ГОСПОДАРСЬКОЇ ДІЯЛЬНОСТІ ДЛЯ ПЛАТНИКІВ ЄДИНОГО ПОДАТКУ
            ПЕРШОЇ ГРУПИ
          </h3>

          <div className="statement-monthly__payment">
            <table>
              <thead>
                <tr>
                  <th>Щомісячні авансові внески, грн.</th>
                </tr>
                <tbody>
                  <tr>
                    <th>І квартал</th>
                    <th> ІІ квартал</th>
                    <th>ІІІ квартал</th>
                    <th className="table__monthly-width">IV квартал</th>
                  </tr>
                  <tr>
                    <th>R02G1</th>
                    <th>R02G2</th>
                    <th>R02G3</th>
                    <th>R02G4</th>
                  </tr>
                  <tr>
                    <th>Назва показника</th>
                    <th>Код рядка </th>
                    <th className="value__width">
                      Обсяг (грн., коп.) <sup>4</sup>
                    </th>
                  </tr>
                  <tr>
                    <th className="table__text-start">
                      Обсяг доходу за звітний (податковий) період відповідно до
                      статті 292 глави 1 розділу XIV Податкового кодексу України
                      (згідно з підпунктом 1 пункту 291.4 статті 291 глави 1
                      розділу XIV Податкового кодексу України)
                    </th>
                    <th>
                      <b>01</b>
                    </th>
                    <th>R001G3</th>
                  </tr>
                  <tr>
                    <th className="table__text-start">
                      Обсяг доходу, що оподаткований за ставкою 15 ідсотків
                      (згідно з пунктом 293.4 статті 293 глави 1 розділу XIV
                      Податкового кодексу України), у звітному (податковому)
                      періоді <sup>5</sup>
                    </th>
                    <th>
                      <b>02</b>{" "}
                    </th>
                    <th>R002G3</th>
                  </tr>
                </tbody>
              </thead>
            </table>
          </div>

          <h3 className="text-center mb-title">
            ІІІ. ПОКАЗНИКИ ГОСПОДАРСЬКОЇ ДІЯЛЬНОСТІ ДЛЯ ПЛАТНИКІВ ЄДИНОГО
            ПОДАТКУ ДРУГОЇ ГРУПИ
          </h3>
          <div className="statement-monthly__payment">
            <table>
              <thead>
                <tr>
                  <th>Щомісячні авансові внески, грн., коп.</th>
                </tr>
                <tbody>
                  <tr>
                    <th>І квартал</th>
                    <th> ІІ квартал</th>
                    <th>ІІІ квартал</th>
                    <th className="table__monthly-width">IV квартал</th>
                  </tr>
                  <tr>
                    <th>R03G1</th>
                    <th>R03G2</th>
                    <th>R03G3</th>
                    <th>R03G4</th>
                  </tr>
                  <tr>
                    <th>Назва показника</th>
                    <th>Код рядка </th>
                    <th className="value__width">
                      Обсяг (грн., коп.) <sup>4</sup>
                    </th>
                  </tr>
                  <tr>
                    <th className="table__text-start">
                      Обсяг доходу за звітний (податковий) період відповідно до
                      статті 292 глави 1 розділу XIV Податкового кодексу України
                      (згідно з підпунктом 1 пункту 291.4 статті 291 глави 1
                      розділу XIV Податкового кодексу України)
                    </th>
                    <th>
                      <b>03</b>
                    </th>
                    <th>R003G3</th>
                  </tr>
                  <tr>
                    <th className="table__text-start">
                      Обсяг доходу, що оподаткований за ставкою 15 ідсотків
                      (згідно з пунктом 293.4 статті 293 глави 1 розділу XIV
                      Податкового кодексу України), у звітному (податковому)
                      періоді <sup>5</sup>
                    </th>
                    <th>
                      <b>04</b>
                    </th>
                    <th>R004G3</th>
                  </tr>
                </tbody>
              </thead>
            </table>
          </div>

          <h3 className="text-center mb-title">
            ІV. ПОКАЗНИКИ ГОСПОДАРСЬКОЇ ДІЯЛЬНОСТІ ДЛЯ ПЛАТНИКІВ ЄДИНОГО ПОДАТКУ
            ТРЕТЬОЇ ГРУПИ
          </h3>

          <div className="statement__indicators">
            <table>
              <thead>
                <th className="text-center__table">Назва показника</th>
                <th className="text-center__table table__indicators-small">
                  Код рядка{" "}
                </th>
                <th className="table__indicators-width">
                  Обсяг (грн., коп.) <sup>4</sup>
                </th>
              </thead>
              <tbody>
                <tr>
                  <th>
                    Обсяг доходу за звітний (податковий) період, що
                    оподатковується за ставкою 3 %{" "}
                  </th>
                  <th className="text-center__table">
                    <b>05</b>
                  </th>
                  <th className="text-center__table">R005G3</th>
                </tr>
                <tr>
                  <th>
                    Обсяг доходу за звітний (податковий) період, що
                    оподатковується за ставкою 5 %{" "}
                  </th>
                  <th className="text-center__table">
                    <b>06</b>
                  </th>
                  <th className="text-center__table">R006G3</th>
                </tr>
                <tr>
                  <th>
                    Обсяг доходу, що оподаткований за ставкою 15 відсотків
                    (згідно з пунктом 293.4 статті 293 глави 1 розділу XIV
                    Податкового кодексу України), у звітному (податковому)
                    періоді <sup>5</sup>{" "}
                  </th>
                  <th className="text-center__table">
                    <b>07</b>
                  </th>
                  <th className="text-center__table">R007G3</th>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-center mb-title">
            {" "}
            V. ВИЗНАЧЕННЯ ПОДАТКОВИХ ЗОБОВ'ЯЗАНЬ ПО ЄДИНОМУ ПОДАТКУ
          </h3>

          <div className="statement__indicators">
            <table>
              <thead>
                <th className="text-center__table">Назва показника</th>
                <th className="text-center__table table__indicators-small">
                  Код рядка{" "}
                </th>
                <th className="table__indicators-width">
                  Обсяг (грн., коп.) <sup>4</sup>
                </th>
              </thead>
              <tbody>
                <tr>
                  <th>
                    Загальна сума доходу за звітний (податковий) період (сума
                    значень рядків 01 + 02 + 03 + 04 + 05 + 06 + 07)
                  </th>
                  <th className="text-center__table">
                    <b>08</b>
                  </th>
                  <th className="text-center__table">R008G3</th>
                </tr>

                <tr>
                  <th>
                    Сума податку за ставкою 15 % ((рядок 02 + рядок 04 + рядок
                    07) × 15 %){" "}
                  </th>
                  <th className="text-center__table">
                    <b>09</b>{" "}
                  </th>
                  <th className="text-center__table">R009G3</th>
                </tr>

                <tr>
                  <th>Сума податку за ставкою 3 % (рядок 05 × 3 %)</th>
                  <th className="text-center__table">
                    <b>10</b>{" "}
                  </th>
                  <th className="text-center__table">R010G3</th>
                </tr>

                <tr>
                  <th>Сума податку за ставкою 5 % (рядок 06 × 5 %) </th>
                  <th className="text-center__table">
                    <b>11</b>
                  </th>
                  <th className="text-center__table">R011G3</th>
                </tr>

                <tr>
                  <th>
                    Нараховано всього за звітний (податковий) період (рядок 9 +
                    рядок 10 + рядок 11){" "}
                  </th>
                  <th className="text-center__table">
                    <b>12</b>
                  </th>
                  <th className="text-center__table">R012G3</th>
                </tr>

                <tr>
                  <th>
                    Нараховано за попередній звітний (податковий) період
                    (значення рядка 12 декларації попереднього звітного
                    (податкового) періоду){" "}
                  </th>
                  <th className="text-center__table">
                    <b>13</b>
                  </th>
                  <th className="text-center__table">R013G3</th>
                </tr>

                <tr>
                  <th>
                    Сума єдиного податку, яка підлягає нарахуванню та сплаті в
                    бюджет за підсумками поточного звітного (податкового)
                    періоду (рядок 12 - рядок 13)
                  </th>
                  <th className="text-center__table">
                    <b>14.1</b>
                  </th>
                  <th className="text-center__table">R0141G3</th>
                </tr>

                <tr>
                  <th>
                    Позитивне значення різниці між сумою загального мінімального
                    податкового зобов’язання та загальною сумою сплачених
                    податків, зборів, платежів та витрат на оренду земельних
                    ділянок (рядок 04 колонки 3 розділу ІІ додатку 2){" "}
                    <sup>6</sup>
                  </th>
                  <th className="text-center__table">
                    <b>14.2</b>
                  </th>
                  <th className="text-center__table">R0142G3</th>
                </tr>

                <tr>
                  <th>
                    <b>
                      Загальна сума єдиного податку, яка підлягає нарахуванню та
                      сплаті в бюджет за підсумками поточного звітного
                      (податкового) періоду (рядок 14.1 + рядок 14.2){" "}
                    </b>
                    <sup>7</sup>
                  </th>
                  <th className="text-center__table">
                    <b>14</b>
                  </th>
                  <th className="text-center__table">R014G3</th>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-center mb-title">
            {" "}
            VІ. ВИЗНАЧЕННЯ ПОДАТКОВИХ ЗОБОВ'ЯЗАНЬ У ЗВ'ЯЗКУ З ВИПРАВЛЕННЯМ
            САМОСТІЙНО ВИЯВЛЕНИХ ПОМИЛОК
          </h3>

          <div className="statement__mistake">
            <table>
              <thead>
                <th className="text-center__table">Назва показника</th>
                <th className="text-center__table table__indicators-small">
                  Код рядка{" "}
                </th>
                <th className="table__indicators-width">
                  Обсяг (грн., коп.) <sup>4</sup>
                </th>
              </thead>
              <tbody>
                <tr>
                  <th>
                    Сума єдиного податку, яка підлягала перерахуванню до
                    бюджету, за даними звітного (податкового) періоду, в якому
                    виявлена помилка (рядок 14 відповідної декларації){" "}
                  </th>
                  <th className="text-center__table">
                    <b>15</b>
                  </th>
                  <th className="text-center__table">R015G3</th>
                </tr>
                <tr>
                  <th>
                    Уточнена сума податкових зобов'язань за звітний (податковий)
                    період, у якому виявлена помилка
                  </th>
                  <th className="text-center__table">
                    <b>16</b>
                  </th>
                  <th className="text-center__table">R016G3</th>
                </tr>
                <tr>
                  <th className="text-mistake-center">
                    <b>Розрахунки у зв'язку з виправленням помилки:</b>
                  </th>
                </tr>

                <tr>
                  <th>
                    Збільшення суми, яка підлягала перерахуванню до бюджету
                    (рядок 16 - рядок 15, якщо рядок 16 &lr; рядка 15)
                  </th>
                  <th className="text-center__table">
                    <b>17</b>
                  </th>
                  <th className="text-center__table">R017G3</th>
                </tr>

                <tr>
                  <th>
                    Зменшення суми, яка підлягала перерахуванню до бюджету{" "}
                    <sup>8</sup>
                    (рядок 16 - рядок 15, якщо рядок 16 &lt; рядка 15)
                  </th>

                  <th className="text-center__table">
                    <b>18 </b>
                  </th>
                  <th className="text-center__table">R018G3</th>
                </tr>

                <tr>
                  <th>
                    Сума штрафу, яка нарахована платником податку самостійно у
                    зв'язку з виправленням помилки, <span>R019G1</span> % (рядок
                    17 × 3 % або 17 × 5 %) <sup>9</sup>
                  </th>
                  <th className="text-center__table">
                    <b>19</b>
                  </th>
                  <th className="text-center__table">R019G3</th>
                </tr>

                <tr>
                  <th>
                    Сума пені, яка нарахована платником податку самостійно
                    відповідно до підпункту 129.1.3 пункту 129.1 статті 129
                    глави 12 розділу ІІ Податкового кодексу України
                  </th>
                  <th className="text-center__table">
                    <b>20 </b>
                  </th>
                  <th className="text-center__table">R020G3</th>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-center mb-title">
            {" "}
            VІІ. ВИЗНАЧЕННЯ ЗОБОВ'ЯЗАНЬ ІЗ СПЛАТИ ЄДИНОГО ВНЕСКУ ЗА ДАНИМИ
            ЗВІТНОГО (ПОДАТКОВОГО) ПЕРІОДУ
          </h3>

          <div className="statement__obligations">
            <table>
              <thead>
                <th className="text-center__table">Назва показника</th>
                <th className="text-center__table table__indicators-small">
                  Код рядка{" "}
                </th>
                <th className="table__indicators-width">
                  Обсяг (грн., коп.) <sup>4</sup>
                </th>
              </thead>
              <tbody>
                <tr>
                  <th>
                    Сума єдиного внеску, яка підлягає сплаті на небюджетні
                    рахунки, за даними звітного (податкового) періоду (рядок
                    Усього графа 4 розділу 9 додатку 1){" "}
                  </th>
                  <th className="text-center__table">
                    <b>21</b>
                  </th>
                  <th className="text-center__table">R021G3</th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="statement__addition">
            <table>
              <thead>
                <tr>
                  <th>
                    <b>
                      Доповнення до податкової декларації (заповнюється і
                      додається відповідно до пункту 46.4 статті 46 глави 2
                      розділу ІІ Податкового кодексу України) на HJAR арк.
                    </b>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="table__addition-small">N з/п</th>
                  <th>Зміст доповнення</th>
                </tr>
                <tr>
                  <th></th>
                  <th>T2RXXXXG2S</th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="statement__through-comment">
            <h3>До декларації додається:</h3>
            <table>
              <tr>
                <th>1</th>
                <th>
                  Додаток 1 "Відомості про суми нарахованого доходу
                  застрахованих осіб та суми нарахованого єдиного внеску"{" "}
                  <sup>10</sup>
                </th>
                <th className="table__through-width">HD1</th>
              </tr>
              <tr>
                <th>2</th>
                <th>
                  Додаток 2 "Розрахунок загального мінімального податкового
                  зобов’язання за податковий (звітний) рік" <sup>6</sup>
                </th>
                <th className="table__through-width">HD2</th>
              </tr>
            </table>
          </div>

          <div className="statement-footer__declaration">
            <div className="statement-footer__data">
              <p>Дата подання декларації:</p>
              <div className="statement-footer__data-table">
                <p>HFILL</p>
              </div>
            </div>

            <h3>Інформація про особу, уповноважену на заповнення декларації</h3>

            <div className="statement-footer__name">
              <p>
                Прізвище, ім'я, по батькові (за наявності) уповноваженої особи:
              </p>
              <div className="statement-footer__name-table">
                <p>HEXECUTOR</p>
              </div>
            </div>

            <div className="statement-footer__number-registration">
              <div className="statement-footer__number-text">
                <p>Реєстраційний номер облікової картки платника податків</p>
                <p>
                  або серія (за наявності) та номер паспорта <sup>1</sup>
                </p>
              </div>

              <div className="statement-footer__number-table">
                <p>HKEXECUTOR</p>
              </div>
            </div>
          </div>

          <div className="statement-footer__sign">
            <div className="statement-footer__info">
              <h3>Фізична особа - платник податку або уповноважена особа</h3>
            </div>
            <div className="statement-footer__sign-block">
              <div></div>
              <p>(підпис)</p>
            </div>

            <div className="statement-footer__name-block">
              <div>HBOS</div>
              <p>(власне ім'я та прізвище)</p>
            </div>
          </div>
        </div>

        <div className="statement-comment__owner-edit">
          <h3 className="statement-comment__title">
            Ця частина декларації заповнюється посадовими особами контролюючого
            органу
          </h3>
          <div className="statement-comment__info-write">
            <div className="checked-base">
              <div id="inputPreview">
                <input
                  name="cssCheckbox"
                  id="demo_opt_1"
                  type="checkbox"
                  className="css-checkbox"
                />
                <label htmlFor="demo_opt_1"></label>
              </div>
            </div>
            <p>
              Відмітка про внесення даних до електронної бази податкової
              звітності
            </p>
            <div className="statement__block-data">
              <div className="year">
                "<div className="year-day"></div>"
                <div className="year-month"></div>
                <div className="year-years"></div>
                <p> року</p>
              </div>
            </div>
          </div>
          <p className="comment__owner">
            (посадова особа контролюючого органу (підпис, власне ім'я та
            прізвище))
          </p>
          <p className="comment__owner-text">
            За результатами камеральної перевірки декларації (потрібне
            позначити):
          </p>
          <div className="statement-comment__info-text">
            <div className="checked-base">
              <div id="inputPreview">
                <input
                  name="cssCheckbox"
                  id="demo_opt_2"
                  type="checkbox"
                  className="css-checkbox"
                />
                <label htmlFor="demo_opt_2"></label>
              </div>
            </div>
            <p>порушень (помилок) не виявлено </p>
            <div className="statement__block-data">
              <div className="year">
                "<div className="year-day"></div>"
                <div className="year-month"> </div>
                <p>20</p>
                <div className="year-years"></div>
              </div>
              року
              <p></p>№<div className="year-numer"></div>
            </div>
          </div>
          <p className="comment__owner border-bott">
            <b>
              (посадова особа контролюючого органу (підпис, власне ім'я та
              прізвище))
            </b>
          </p>
          <div className="data">
            <div className="statement__block-data">
              <div className="year">
                "<div className="year-day"></div>"
                <div className="year-month"> </div>
                <p>20</p>
                <div className="year-years"></div>
              </div>{" "}
              року
            </div>
          </div>
        </div>

        <div className="comment__info">
          <p>
            * Подається з метою отримання довідки про доходи за інший період,
            ніж квартальний (річний) податковий (звітний) період / призначення
            пенсії / матеріального забезпечення, страхових виплат . Для
            призначення пенсії / матеріального забезпечення, страхових виплат
            обов’язково зазначається тип декларації "Звітна" або "Звітна нова" з
            додатковою позначкою "Довідкова". Тип декларації "Уточнююча" при
            поданні Додатку 1 "Відомостей про суми нарахованого доходу
            застрахованих осіб та суми нарахованого єдиного внеску" (далі -
            Додаток 1) для призначення пенсії / матеріального забезпечення,
            страхових виплат не застосовується. У разі подання декларації для
            отримання довідки обов’язково зазначається тип декларації
            "Довідкова", податкові зобов’язання по єдиному податку в розділі V
            та VІ декларації не визначаються та Додаток 1 не подається. Подання
            таких декларацій не звільняє платника від обов’язку подання
            декларації у строк, встановлений для квартального (річного)
            податкового (звітного) періоду.
          </p>
          <p>
            ** Для отримання довідки про доходи платником зазначається номер
            календарного місяця, за який подається декларація з позначкою
            "Довідково". Для призначення пенсії платником вказується арабськими
            цифрами від 1 до 12 номер календарного місяця, в якому подається
            декларація. Для забезпечення реалізації права на матеріальне
            забезпечення та страхових виплат за загальнообов’язковим державним
            соціальним страхуванням платником вказується арабськими цифрами від
            1 до 12 номер календарного місяця, в якому настав страховий випадок.
          </p>
          <p>
            <sup>1</sup> Серію (за наявності) та номер паспорта зазначають
            фізичні особи, які через релігійні переконання відмовляються від
            прийняття реєстраційного номера облікової картки платника податків
            та офіційно повідомили про це відповідний контролюючий орган і мають
            відмітку у паспорті.
          </p>
          <p>
            <sup>2</sup>У разі подання декларації за останній податковий
            (звітний) період (квартал, півріччя, три квартали), на який припадає
            дата державної реєстрації припинення/перехід на сплату інших
            податків і зборів платник єдиного податку звільняється від обов’язку
            подання декларації у строк, визначений для річного податкового
            (звітного періоду) (пункт 294.6 статті 294, підпункт 296.5.1 пункту
            296.5 статті 296 глави 1 розділу XIV Податкового кодексу України).
          </p>
          <p>
            <sup>3</sup>
            Код та назва виду економічної діяльності зазначаються відповідно до
            Класифікатора видів економічної діяльності (КВЕД ДК 009:2010).
          </p>
          <p>
            <sup>4</sup>
            Заповнюється наростаючим підсумком з початку року у гривнях з двома
            десятковими знаками після коми.
          </p>
          <p className="none__for-comment">
            {" "}
            <sup>5</sup>
            <b>Включається:</b>
            <p className="none__for-comment">
              сума доходу, що перевищує обсяги, встановлені підпунктами 1, 2, 3
              пункту 291.4 статті 291 глави 1 розділу XIV Податкового кодексу
              України, у звітному (податковому) періоді;
            </p>
            <p className="none__for-comment">
              сума доходу, отриманого від провадження діяльності, не зазначеної
              в реєстрі платників єдиного податку (для першої або другої групи),
              у звітному (податковому) періоді;
            </p>
            <p className="none__for-comment">
              сума доходу, отриманого при застосуванні іншого способу
              розрахунків, ніж передбачено пунктом 291.6 статті 291 глави 1
              розділу XIV Податкового кодексу України, у звітному (податковому)
              періоді;
            </p>
            <p className="none__for-comment">
              сума доходу, отриманого від здійснення видів діяльності, які не
              дають права на застосування спрощеної системи оподаткування, у
              звітному (податковому) періоді;
            </p>
            <p className="none__for-comment">
              сума доходу, отриманого платниками першої або другої групи від
              провадження діяльності, яка не передбачена в підпункті 1 або 2
              пункту 291.4 статті 291 глави 1 розділу XIV Податкового кодексу
              України.
            </p>
          </p>
          <p>
            {" "}
            <sup>6</sup>
            Платники єдиного податку - власники, орендарі, користувачі на інших
            умовах (в тому числі на умовах емфітевзису) земельних ділянок,
            віднесених до сільськогосподарських угідь, а також голови сімейних
            фермерських господарств, у тому числі щодо земельних ділянок, що
            належать членам такого сімейного фермерського господарства та
            використовуються таким сімейним фермерським господарством,
            зобов’язані подавати додаток з розрахунком загального мінімального
            податкового зобов’язання у складі податкової декларації за
            податковий (звітний) рік (пункт 2971 .1 статті 2971 глави 1 розділу
            XIV Податкового кодексу України).
          </p>
          <p>
            <sup>7</sup>
            Підлягає обов’язковому заповненню.
          </p>
          <p>
            <sup>8</sup> Зазначається тільки як позитивне значення
          </p>
          <p>
            <sup>9</sup>Нараховується платником у разі самостійного виявлення
            факту заниження податкового зобов'язання (пункт 50.1 статті 50 глави
            2 розділу ІІ Податкового кодексу України)
          </p>
          <p>
            <sup>10</sup>
            Додаток 1 є невід'ємною частиною декларації, подається та
            заповнюється фізичними особами - підприємцями - платниками єдиного
            податку першої - третьої груп, відповідно до пунктів 296.2 та 296.3
            статті 296 глави 1 розділу XIV Податкового кодексу України, та які є
            платниками єдиного внеску відповідно до пункту 4 частини першої
            статті 4 Закону України "Про збір та облік єдиного внеску на
            загальнообов'язкове державне соціальне страхування". Додаток 1 не
            подається та не заповнюється зазначеними платниками, за умови
            дотримання ними вимог, визначених частинами четвертою та шостою
            статті 4 Закону України "Про збір та облік єдиного внеску на
            загальнообов'язкове державне соціальне страхування", що дають право
            на звільнення таких осіб від сплати за себе єдиного внеску. Такі
            особи можуть подавати Додаток 1 виключно за умови їх добровільної
            участі у системі загальнообов'язкового державного соціального
            страхування.
          </p>
        </div>
      </div>
    </>
  );
};

export default DocumentF0103308;
