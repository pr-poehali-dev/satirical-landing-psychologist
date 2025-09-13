import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Academic Header */}
      <div className="bg-slate-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
          <span>Лаборатория когнитивно-поведенческих исследований</span>
          <Badge variant="outline" className="border-slate-300 text-slate-300">
            Учебный макет
          </Badge>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-900">Д.М.Н. Исследовательский центр</h1>
            <div className="flex space-x-6 text-sm">
              <a href="#methodology" className="text-slate-600 hover:text-slate-900">Методология</a>
              <a href="#publications" className="text-slate-600 hover:text-slate-900">Публикации</a>
              <a href="#protocol" className="text-slate-600 hover:text-slate-900">Протокол</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Кандидат психологических наук
            </h2>
            <p className="text-xl text-slate-700 mb-2">
              Специализация: когнитивно-поведенческая терапия, нейропсихологическая диагностика
            </p>
            <p className="text-lg text-slate-600">
              Стаж клинических исследований: 12 лет | h-индекс: 23 | Цитирований: 1,247
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">247</div>
                <p className="text-sm text-slate-600">Участников исследований</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">18</div>
                <p className="text-sm text-slate-600">Рецензируемых публикаций</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                <p className="text-sm text-slate-600">Активных протоколов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                <p className="text-sm text-slate-600">Соответствие стандартам</p>
              </CardContent>
            </Card>
          </div>

          {/* Academic Qualifications */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
            <h3 className="font-semibold text-slate-800 mb-3">Академическая квалификация</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
              <div>
                <p><strong>Образование:</strong> МГУ им. М.В. Ломоносова, факультет психологии (2011)</p>
                <p><strong>Аспирантура:</strong> Институт психологии РАН (2014)</p>
                <p><strong>Интернатура:</strong> НМИЦ психиатрии и наркологии (2015)</p>
              </div>
              <div>
                <p><strong>Сертификации:</strong> КПТ (BABCP), EMDR (Level II)</p>
                <p><strong>Членство:</strong> РПО, APA Division 12, EACBT</p>
                <p><strong>Супервизия:</strong> 450+ часов клинической практики</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Методологический подход
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Интегративная модель, основанная на доказательной базе когнитивно-поведенческой терапии 
            с элементами метакогнитивного подхода и техник третьей волны КПТ
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Methodology Block 1 */}
            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Brain" size={20} className="text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Когнитивная реструктуризация</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                <p>
                  Идентификация и модификация дисфункциональных когнитивных схем через 
                  применение сократического метода и техник когнитивного мониторинга.
                </p>
                <div className="mt-3 text-xs text-slate-500">
                  Протокол: Beck, A.T. (1976) | Адаптация: Холмогорова А.Б. (2011)
                </div>
              </CardContent>
            </Card>

            {/* Methodology Block 2 */}
            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon name="Activity" size={20} className="text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Поведенческие интервенции</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                <p>
                  Систематическое применение принципов оперантного и классического обусловливания 
                  для модификации неадаптивных поведенческих паттернов.
                </p>
                <div className="mt-3 text-xs text-slate-500">
                  Основа: Skinner, B.F. (1953) | Клиническая адаптация: Wolpe, J. (1958)
                </div>
              </CardContent>
            </Card>

            {/* Methodology Block 3 */}
            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon name="Target" size={20} className="text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Экспозиционная терапия</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                <p>
                  Градуированная экспозиция in vivo и in vitro для редукции авоидантного поведения 
                  и десенситизации к тревожным стимулам.
                </p>
                <div className="mt-3 text-xs text-slate-500">
                  Методология: Foa, E.B. & Kozak, M.J. (1986) | Протокол: Craske, M.G. (2017)
                </div>
              </CardContent>
            </Card>

            {/* Methodology Block 4 */}
            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Icon name="Zap" size={20} className="text-yellow-600" />
                  </div>
                  <CardTitle className="text-lg">Mindfulness-based подходы</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                <p>
                  Интеграция техник осознанности для развития метакогнитивной осведомленности 
                  и редукции руминативных процессов.
                </p>
                <div className="mt-3 text-xs text-slate-500">
                  Базис: Kabat-Zinn, J. (1994) | MBCT: Segal, Z.V. et al. (2002)
                </div>
              </CardContent>
            </Card>

            {/* Methodology Block 5 */}
            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Icon name="BarChart3" size={20} className="text-red-600" />
                  </div>
                  <CardTitle className="text-lg">Психометрическая оценка</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                <p>
                  Систематическое применение валидизированных инструментов для объективной 
                  оценки терапевтической динамики и клинических исходов.
                </p>
                <div className="mt-3 text-xs text-slate-500">
                  Инструменты: BAI, BDI-II, GAF, PCL-5, DASS-21, PHQ-9
                </div>
              </CardContent>
            </Card>

            {/* Methodology Block 6 */}
            <Card className="border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Icon name="Network" size={20} className="text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">Системный анализ</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                <p>
                  Холистический подход к концептуализации случая с учетом биопсихосоциальных 
                  факторов и системных взаимодействий.
                </p>
                <div className="mt-3 text-xs text-slate-500">
                  Модель: Bronfenbrenner, U. (1979) | Адаптация: Engel, G.L. (1977)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Научные публикации
          </h2>

          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="articles">Статьи</TabsTrigger>
              <TabsTrigger value="chapters">Главы</TabsTrigger>
              <TabsTrigger value="conferences">Конференции</TabsTrigger>
              <TabsTrigger value="reviews">Обзоры</TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="border-b border-slate-200 pb-4">
                      <h4 className="font-medium text-slate-900 mb-2">
                        Эффективность метакогнитивной терапии при генерализованном тревожном расстройстве: 
                        рандомизированное контролируемое исследование
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">
                        <em>Журнал клинической психологии</em>, 2023, Том 15, №3, с. 45-62
                      </p>
                      <div className="flex gap-4 text-xs text-slate-500">
                        <span>Импакт-фактор: 2.847</span>
                        <span>Цитирований: 23</span>
                        <span>DOI: 10.1234/jcp.2023.15.3.045</span>
                      </div>
                    </div>
                    
                    <div className="border-b border-slate-200 pb-4">
                      <h4 className="font-medium text-slate-900 mb-2">
                        Нейропсихологические корреляты когнитивной ригидности у пациентов 
                        с обсессивно-компульсивным расстройством
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">
                        <em>Нейропсихология</em>, 2022, Том 28, №4, с. 112-128
                      </p>
                      <div className="flex gap-4 text-xs text-slate-500">
                        <span>Импакт-фактор: 3.142</span>
                        <span>Цитирований: 41</span>
                        <span>DOI: 10.1234/np.2022.28.4.112</span>
                      </div>
                    </div>

                    <div className="border-b border-slate-200 pb-4">
                      <h4 className="font-medium text-slate-900 mb-2">
                        Адаптация и валидация русскоязычной версии опросника метакогнитивных убеждений (MCQ-30)
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">
                        <em>Психологический журнал</em>, 2022, Том 43, №2, с. 78-89
                      </p>
                      <div className="flex gap-4 text-xs text-slate-500">
                        <span>Импакт-фактор: 1.823</span>
                        <span>Цитирований: 67</span>
                        <span>DOI: 10.1234/pj.2022.43.2.078</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="chapters" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="border-b border-slate-200 pb-4">
                      <h4 className="font-medium text-slate-900 mb-2">
                        Глава 7: Протоколы экспозиционной терапии при специфических фобиях
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">
                        В кн.: <em>Современные подходы в когнитивно-поведенческой терапии</em> / 
                        Под ред. А.Б. Холмогоровой. М.: Юрайт, 2023. С. 234-267.
                      </p>
                      <div className="text-xs text-slate-500">
                        ISBN: 978-5-534-12345-6
                      </div>
                    </div>
                    
                    <div className="border-b border-slate-200 pb-4">
                      <h4 className="font-medium text-slate-900 mb-2">
                        Глава 12: Интеграция mindfulness-техник в клиническую практику
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">
                        В кн.: <em>Третья волна когнитивно-поведенческой терапии: теория и практика</em> / 
                        Под ред. В.М. Бехтерева. СПб.: Питер, 2022. С. 445-478.
                      </p>
                      <div className="text-xs text-slate-500">
                        ISBN: 978-5-534-11234-5
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conferences" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="border-b border-slate-200 pb-4">
                      <h4 className="font-medium text-slate-900 mb-2">
                        Предикторы терапевтического ответа при лечении социальной тревожности: 
                        данные 6-месячного наблюдения
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">
                        <em>XXV Международная конференция по когнитивно-поведенческой терапии</em>, 
                        Москва, 15-17 сентября 2023
                      </p>
                      <div className="text-xs text-slate-500">
                        Тип: Устный доклад | Секция: Клинические исследования
                      </div>
                    </div>
                    
                    <div className="border-b border-slate-200 pb-4">
                      <h4 className="font-medium text-slate-900 mb-2">
                        Роль алекситимии в формировании соматических симптомов: кросс-секционное исследование
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">
                        <em>European Association for Behavioural and Cognitive Therapies Congress</em>, 
                        Вена, 7-10 июля 2023
                      </p>
                      <div className="text-xs text-slate-500">
                        Тип: Постерная презентация | Раздел: Psychosomatic Medicine
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="border-b border-slate-200 pb-4">
                      <h4 className="font-medium text-slate-900 mb-2">
                        Систематический обзор эффективности интернет-интервенций при депрессивных расстройствах: 
                        метаанализ 45 РКИ
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">
                        <em>Clinical Psychology Review</em>, 2023, Том 89, с. 102-118
                      </p>
                      <div className="flex gap-4 text-xs text-slate-500">
                        <span>Импакт-фактор: 13.751</span>
                        <span>Цитирований: 156</span>
                        <span>Протокол PROSPERO: CRD42022345678</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Protocol Section */}
      <section id="protocol" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Протокол предварительной регистрации
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Структурированная анкета для первичной оценки соответствия критериям включения 
              в исследовательские протоколы и клинические программы
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="FileText" size={20} />
                Анкета участника исследования
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Demographic Section */}
              <div>
                <h4 className="font-medium text-slate-900 mb-4">I. Демографические характеристики</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Возраст (полных лет)
                    </label>
                    <input 
                      type="number" 
                      min="18" 
                      max="65"
                      className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Биологический пол
                    </label>
                    <select className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Выберите</option>
                      <option value="male">Мужской</option>
                      <option value="female">Женский</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Уровень образования
                    </label>
                    <select className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Выберите</option>
                      <option value="secondary">Среднее</option>
                      <option value="vocational">Средне-специальное</option>
                      <option value="bachelor">Высшее (бакалавриат)</option>
                      <option value="master">Высшее (магистратура/специалитет)</option>
                      <option value="phd">Учёная степень</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Семейный статус
                    </label>
                    <select className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Выберите</option>
                      <option value="single">Не состою в браке</option>
                      <option value="married">Состою в браке</option>
                      <option value="divorced">Разведён(а)</option>
                      <option value="widowed">Вдовец/вдова</option>
                    </select>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Clinical History Section */}
              <div>
                <h4 className="font-medium text-slate-900 mb-4">II. Клинико-анамнестические данные</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Первичное обращение по поводу:
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="Опишите основную проблематику, которая привела к обращению"
                      className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Длительность текущих симптомов (месяцев)
                    </label>
                    <input 
                      type="number" 
                      min="1"
                      className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Предшествующий опыт психотерапии
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="therapy_history" value="none" className="mr-2" />
                        <span className="text-sm">Отсутствует</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="therapy_history" value="completed" className="mr-2" />
                        <span className="text-sm">Завершённые эпизоды терапии (1-3)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="therapy_history" value="multiple" className="mr-2" />
                        <span className="text-sm">Множественные терапевтические контакты (&gt;3)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="therapy_history" value="current" className="mr-2" />
                        <span className="text-sm">Находится в терапии в настоящее время</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Contact Information */}
              <div>
                <h4 className="font-medium text-slate-900 mb-4">III. Контактная информация</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email для связи*
                    </label>
                    <input 
                      type="email"
                      required
                      className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Телефон (мобильный)
                    </label>
                    <input 
                      type="tel"
                      className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Informed Consent */}
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-medium text-slate-900 mb-3">Информированное согласие</h4>
                <div className="space-y-3 text-sm text-slate-700">
                  <label className="flex items-start">
                    <input type="checkbox" required className="mt-1 mr-3" />
                    <span>
                      Подтверждаю, что ознакомлен(а) с информацией об исследовании, 
                      понимаю его цели и процедуры
                    </span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" required className="mt-1 mr-3" />
                    <span>
                      Согласен(на) на обработку персональных данных в соответствии с 
                      требованиями ФЗ-152 "О персональных данных"
                    </span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" required className="mt-1 mr-3" />
                    <span>
                      Понимаю добровольный характер участия и возможность выхода из 
                      исследования на любом этапе
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Отправить анкету на рассмотрение
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Disclaimers Section */}
      <section className="py-12 bg-red-50 border-t-4 border-red-400">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-red-200">
            <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
              <Icon name="AlertTriangle" size={20} />
              Важные ограничения и дисклеймеры
            </h3>
            <div className="space-y-3 text-sm text-slate-700">
              <p>
                <strong>Учебный макет:</strong> Данный веб-сайт создан исключительно в учебных целях 
                для демонстрации академического стиля оформления. Информация носит пародийный характер.
              </p>
              <p>
                <strong>Не для диагностики:</strong> Представленная информация не предназначена для 
                постановки диагнозов, планирования лечения или замены консультации квалифицированного специалиста.
              </p>
              <p>
                <strong>Исследовательские данные:</strong> Все приведённые статистические данные, 
                публикации и результаты исследований являются вымышленными и созданы для иллюстративных целей.
              </p>
              <p>
                <strong>Обращение за помощью:</strong> При наличии психологических проблем обратитесь 
                к лицензированному специалисту в области психического здоровья.
              </p>
              <p className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                © 2024 Учебный проект | Не является медицинским или психологическим сервисом
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Академические связи</h4>
              <ul className="space-y-1 text-slate-400">
                <li>МГУ им. М.В. Ломоносова</li>
                <li>Институт психологии РАН</li>
                <li>НМИЦ психиатрии и наркологии</li>
                <li>European CBT Association</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Исследовательские базы</h4>
              <ul className="space-y-1 text-slate-400">
                <li>PubMed/MEDLINE</li>
                <li>PsycINFO</li>
                <li>Web of Science</li>
                <li>Cochrane Library</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="space-y-1 text-slate-400">
                <p>research@example.edu</p>
                <p>+7 (495) 000-00-00</p>
                <p>Москва, ул. Учебная, д. 1</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-6 bg-slate-700" />
          
          <div className="text-center text-xs text-slate-500">
            <p>
              Данный сайт является учебным макетом и не предоставляет медицинских или психологических услуг
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;