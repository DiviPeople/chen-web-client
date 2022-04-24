import React, { ReactElement, ReactNode } from 'react'
import { useRouter } from 'next/router'
import {
  Layout as RMDLayout,
  Configuration,
  ConfigurableIcons,
  useLayoutNavigation,
  ArrowDropDownSVGIcon,
  CheckBoxSVGIcon,
  FileDownloadSVGIcon,
  KeyboardArrowDownSVGIcon,
  KeyboardArrowLeftSVGIcon,
  KeyboardArrowRightSVGIcon,
  MenuSVGIcon,
  NotificationsSVGIcon,
  RadioButtonCheckedSVGIcon,
  RemoveRedEyeSVGIcon,
  ArrowUpwardSVGIcon,
  CheckSVGIcon,
} from 'react-md'

import LinkUnstyled from '../LinkUnstyled/LinkUnstyled'
import navItems from './navItems'

const icons: ConfigurableIcons = {
  back: <KeyboardArrowLeftSVGIcon />,
  checkbox: <CheckBoxSVGIcon />,
  dropdown: <ArrowDropDownSVGIcon />,
  upload: <FileDownloadSVGIcon />,
  expander: <KeyboardArrowDownSVGIcon />,
  forward: <KeyboardArrowRightSVGIcon />,
  menu: <MenuSVGIcon />,
  notification: <NotificationsSVGIcon />,
  radio: <RadioButtonCheckedSVGIcon />,
  password: <RemoveRedEyeSVGIcon />,
  selected: <CheckSVGIcon />,
  sort: <ArrowUpwardSVGIcon />,
}

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps): ReactElement {
  const { pathname } = useRouter()

  return (
    <Configuration icons={icons}>
      <RMDLayout
        title="Dashboard"
        treeProps={useLayoutNavigation(navItems, pathname, LinkUnstyled)}
      >
        {children}
      </RMDLayout>
    </Configuration>
  )
}
