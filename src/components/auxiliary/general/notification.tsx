import React from 'react'
import { ConfirmModal, Modal, Spinner, VerticalGroup } from '@grafana/ui'
import { enumNotification } from 'utils/auxFunctions/general'
import { INotification } from 'utils/interfaces/notification'

interface Parameters {
    notification: INotification
    setNotificationFunc: React.Dispatch<React.SetStateAction<INotification>>
}

export const CustomNotification = ({notification, setNotificationFunc}: Parameters) => {

    const hideNotification = () => {
        if (notification.onDismissFunc) {notification.onDismissFunc()}
        setNotificationFunc({state: enumNotification.HIDE, title: ""})
    }

    switch(notification.state) {
        case enumNotification.CONFIRM:
            if(notification.confirmText && notification.onConfirmFunc){
                return <ConfirmModal 
                    isOpen={true} 
                    title={(notification.title) ? notification.title : ""} 
                    body={notification.body} 
                    description={notification.description} 
                    confirmText={notification.confirmText} 
                    alternativeText={notification.alternativeText} 
                    dismissText={notification.dismissText} 
                    onAlternative={notification.onAlternativeFunc} 
                    onDismiss={hideNotification} 
                    onConfirm={notification.onConfirmFunc} 
                /> 
            }
        case enumNotification.SUCCESS || enumNotification.ERROR:
            return <Modal 
                title={(notification.title) ? notification.title : ""} 
                isOpen={true} 
                onDismiss={hideNotification}>
                    {notification.description}
            </Modal>

        case enumNotification.LOADING:
            return <VerticalGroup align="center">
                <h4 className="mb-0 mt-4">Loading...</h4>
                <Spinner size={30}/> 
            </VerticalGroup>

        default:
            return <div></div>
    }

}
