
import './comment.css'
import imgAuthor from '../../assets/user.svg'

type CommentProps = {
    author: string
    reviewed: boolean
}

const Comment = (props : CommentProps) => {
    return (
        <div className={`comment ${props.reviewed ? 'green' : 'red'}`}>
           <div className='header-comment'>
            <div className='box-img'>

                <img src={imgAuthor} alt="Author" />
                <h3>{props.author}</h3>
            </div>
                <span className='status'>{props.reviewed ? 'Revisado' : 'Em revisão'}</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure eaque facilis eligendi, blanditiis obcaecati atque totam eos neque aperiam tenetur in dolore qui voluptate earum officiis a. Non, expedita.</p>
        </div>
    )
}

export default Comment