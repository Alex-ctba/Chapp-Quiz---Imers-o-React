import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';
import Widget from '../src/components/Widget';
import db from '../db.json'

//componente de carregamento de tela
function LoadingWidget(){ 
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
       [Bem vindo ao Quiz chapp!]
      </Widget.Content>
    </Widget>
  )
}

function QuestionWidget({ question, TotalQuestion, questionIndex, onSubmit, }){
  const questionId = `questionId_${questionIndex}`
  return (
    <Widget>
    <Widget.Header>
      <h3>{`Pergunta ${questionIndex + 1} de ${TotalQuestion}`}</h3>
    </Widget.Header>
       <img alt="Descrição" style={{width:'100%',height:'150px',objectfit: 'cover',}} src={question.image} />
      <Widget.Content>
           <h2>{question.title}</h2>
           <p>{question.description}</p>
         <form 
         onSubmit={(event)=>{
            event.preventDefault();   
            onSubmit();         
         }}>
         {question.alternatives.map((element, index) => {              
             const elementId = `Elemento_${index}`;
             return (
                <Widget.Topic 
                as="label" 
                htmlFor={elementId}
                >          
                 <input 
                 id={elementId} 
                 name={questionId}
                 type="radio"                 
                 />   
                  {element}          
                </Widget.Topic>
             );
           })}
         
         <Button type="submit">Confirmar</Button>
         </form>
      </Widget.Content>
    </Widget>
  );
}
const screenStates ={
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage(){
  const [screenState, setScreenState] = React.useState(screenStates.LOADING)
  console.log('Perguntas Criadas: ', db.questions)
  const TotalQuestion = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  
  //Simula uma interação depois que o componente nasceu, neste caso roda a tela de loading
  React.useEffect(()=>{
    setTimeout(() => {
    setScreenState(screenStates.QUIZ)
   }, 1*1000);
  }, [])
 
  //capturando o onsubmit
  function handleSubmitQuiz(){
    const nextQuestion = questionIndex + 1;
    if(nextQuestion < TotalQuestion){
      setCurrentQuestion(nextQuestion);
    }else{
      setScreenState(screenStates.RESULT)
    }
  }

  return (
    <QuizBackground backgroundImage ={db.bg}>
      <QuizContainer>
        <QuizLogo />
         {screenState === screenStates.QUIZ && (<QuestionWidget 
          question = {question}
          questionIndex = {questionIndex}
          TotalQuestion = {TotalQuestion}
          onSubmit={handleSubmitQuiz}
          />)}
         {screenState === screenStates.LOADING  && <LoadingWidget />}
         {screenState === screenStates.RESULT && <div>Voce acertou x questões</div>}

      </QuizContainer>
    </QuizBackground>
  );
}