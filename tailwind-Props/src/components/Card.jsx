import React from "react";

export default function Card({username = 'Javaria',post = 'Not Assigned yet'}){
    
    return(
     <div>
        <blockquote>
       <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p></blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {post}
      </div>
    </figcaption>
  
    
    </div>
    )
}