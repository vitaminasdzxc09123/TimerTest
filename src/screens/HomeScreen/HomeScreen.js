import React, {
     useCallback,
     useEffect, 
     useMemo, 
     useState 
}                                  from "react";
import { Text, View}                from "react-native";
import { useDispatch,useSelector } from "react-redux";

import { timerListSelector }       from "../../store/selectors/Timer";
import { removeTimer , setTimer}   from "../../store/actions/Timer";

import CreateTimerModal            from '../../components/modal/CreateTimerModal'
import HeaderMainTimer             from "../../components/ui/HeaderMainTimer";
import List                        from "../../components/base/List";
import TimerBlock                  from "../../components/ui/TimerBlock";

import styles                      from "./styles";
import InfoTimerModal              from "../../components/modal/InfoTimerModal ";

function HomeScreen () {
    const [time,setTime]     = useState(0);
    const [status,setStatus] = useState(-1)
    const [isModalSaveTimer, setIsModalSaveTimer] = useState(false);
    const [isModalInfoTimer, setIsModalInfoTimer] = useState(false);
    const [timerInformation, setTimerInformation] = useState({});

    const [text,onChangeText] = useState('')
    const dispatch = useDispatch();

    const data = useSelector(timerListSelector);

    const transformMinutes = useMemo(() => {
        const convertedValue = Math.floor((time / 60) % 60);
        const formattedValue = ("0" + convertedValue).slice(-2)

        return formattedValue
    },[time])
    
    const transformSeconds = useMemo(() => {
        const convertedValue = Math.floor((time) % 60);
        const formattedValue = ("0" +convertedValue).slice(-2)

        return formattedValue
    },[time])

    const handleStart = useCallback(() => {
        setStatus(1);
    }, []);

    const handlePause = useCallback(() => {
        setStatus(status === 0 ? 1 : 0 );
    }, [status]);

    const handleStop = useCallback(() => {
        setIsModalSaveTimer(true)
        onChangeText('')
     }, []);

     const reset = useCallback(() => {
        setTime(0);
    }, []);

    useEffect(()=>{
        let timerID;
        if ( status === 1) {

            timerID = setInterval(() => {
                setTime(( time ) => time + 1);
            }, 1000 )
        } else {
            clearInterval( timerID )

            if ( status === -1)
            reset();
        }
        return () => { clearInterval ( timerID ) }

    },[status])

    const handleChooseTimer = useCallback((item) => {
         dispatch(removeTimer(item.id))
         setTime(item.time)
    }, []);

    const handleGetInfoTimer = useCallback((item) => {
        setTimerInformation(item)
        setIsModalInfoTimer(true)
   }, []);

    const handleSaveTimer = useCallback(() => {
        setStatus(-1);
        const currentDate = new Date().toISOString()

        const formatDate = currentDate.slice(0,10)

        dispatch(setTimer({
            dateCreated : formatDate,
            title       : text,
            id          : data?.at(-1)?.id + 1 || 0,
            time        : time,
            sec         : transformSeconds ,
            min         : transformMinutes
        }))   
        setIsModalSaveTimer(!isModalSaveTimer)
   }, [ isModalSaveTimer , transformSeconds , transformMinutes,text ]);

   const renderItem = useCallback(({item}) => {

        return (
            <TimerBlock
               handleGetInfoTimer  = {handleGetInfoTimer}
               isModalInfoTimer    = {isModalInfoTimer}
               handleChooseTimer   = {handleChooseTimer}
               item                = {item}
            />
        );
    }, []);

    return (
        <View style = {styles.container}>
        <HeaderMainTimer
            status           = {status}
            handleStart      = {handleStart}
            handlePause      = {handlePause}
            handleStop       = {handleStop}
            transformMinutes = {transformMinutes}
            transformSeconds = {transformSeconds}
            time             = {time}
        />
         <InfoTimerModal
           data                = {timerInformation}
           setIsModalInfoTimer = {setIsModalInfoTimer}
           modalVisible        = {isModalInfoTimer}
         />
         <CreateTimerModal
           text            = {text}
           onChangeText    = {onChangeText}
           handleSaveTimer = {handleSaveTimer}
           modalVisible    = {isModalSaveTimer}
         />
         {data && data.length? 
       <List
          style      = {styles.flatlist}
          list       = {data}
          renderItem = {renderItem}
       /> : 
       <Text style = {styles.titleHello}>{`Hi :)  \n create your first Timer`}</Text>
       }
        </View>
    )
}

export default React.memo(HomeScreen)