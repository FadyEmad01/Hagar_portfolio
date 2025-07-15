import React from 'react'
import { posts } from '@/constants/posts'
import { CardGridWrap } from '../v0/card-grid'

export default function MyWork() {
    return (
        <div className='bg-black w-full flex justify-center pt-[80px] '>
            <div className="max-w-[1360px] w-full flex flex-col items-center overflow-hidden">
                <div id="ar-homepage-posts">
                    <div className="infinite-scroll-component__outerdiv">
                        <CardGridWrap posts={posts} />
                    </div>
                </div>
            </div>
        </div>
    )
    
}
