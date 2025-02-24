import '../App.css'
import Button from '../components/ui/Button';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import { SideBar } from '../components/SideBar';
import { useState } from 'react';
import { SidebarItem } from '../components/SidebarItem';
import { TwitterIcon } from '../icons/TwitterIcon';
import { YoutubeIcon } from '../icons/YoutubeIcon';

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleShare() {
    console.log('Button clicked!')
  };

  function handleAddContent() {
    setModalOpen(true);
  };

  return (
    <>
      <div>
        <SideBar>
          <div className='pt-8'>
            <SidebarItem text='Threads' icon={<TwitterIcon />}></SidebarItem>
            <SidebarItem text='Videos' icon={<YoutubeIcon />}></SidebarItem>
          </div>
        </SideBar>
      </div>
      <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className='bg-myGray-100 p-4 ml-72 min-h-screen relative top-0 left-0'>
        <div className='flex justify-end items-center gap-2 rounded-lg'>
          <Button
            size='md' variant='secondary'
            onClick={handleShare} text={"Share Brain"}
            endIcon={<ShareIcon size='md' />}></Button>
          <Button size='md' variant='primary'
            onClick={handleAddContent} text={"Add Content"}
            startIcon={<PlusIcon size='md' />}></Button>
        </div>
        <div className='flex gap-4 py-4'>
          <Card title='Project Ideas' link='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' />
          <Card title='Test'></Card>
        </div>
      </div>
    </>
  )
}

export default Dashboard