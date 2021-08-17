var color = 'purple';

switch(color)
{
    case 'yellow':
        console.log('i found the expression yellow');
        break;

    case 'white':
        console.log('i found the expression white');
        break;

    case 'magenta':
    case 'red':
        console.log('i found the expression red / magenta');
        break;
        
    case 'purple':
        console.log('i found the expression purple');
        break;
    
    default:
        console.log('sorry , did not get matching expression');   
}