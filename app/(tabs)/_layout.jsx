import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '../../constants/icons'

const TabIcon = ({icon, color, name, focused}) => (
    <View className='items-center justify-center gap-2'>
        <Image 
            source={icon}
            resizeMode='contain'
            tintColor={color}
            className='w-6 h-6' />
        <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>{name}</Text>
    </View>
)

const TabsLayout = () => {
  return (
    <>
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            
        }}>
            <Tabs.Screen
                name='home'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            name='Home'
                            icon={icons.home}
                            color={color}
                            focused={focused} />
                    )
                }} />
        </Tabs>
    </>
  )
}

export default TabsLayout