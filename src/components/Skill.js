import { useContext } from "react";
import config from "../config";
import { LoadingContext } from "../contexts/LoadingContext";
import { skeleton } from "../helpers/utils";
import { DiNodejs, DiPython, DiJavascript1, DiGit, DiDjango } from 'react-icons/di';

const Skill = () => {
    const [loading] = useContext(LoadingContext);

    const renderSkeleton = () => {
        let array = [];
        for (let index = 0; index < 12; index++) {
            array.push((
                <div key={index}>
                    {skeleton({ width: 'w-16', height: 'h-4', className: 'm-1' })}
                </div>
            ))
        }

        return array;
    }

    return (
        <>
            {
                (typeof config.skills !== 'undefined' && config.skills.length !== 0) && (
                    <div className="card shadow-lg compact bg-base-100">
                        <div className="card-body">
                            <div className="mx-3">
                                <h5 className="card-title">
                                    {
                                        loading ? skeleton({width: 'w-32', height: 'h-8'}) : (
                                            <span className="opacity-70">Tech Stack</span>
                                        )
                                    }
                                </h5>
                            </div>
                            <div className="p-3 flow-root">
                                <div className="-m-1 flex flex-wrap">
                                    {
                                        loading ? renderSkeleton() : (
                                            config.skills.map((skill, index) => (
                                                <div key={index} className="m-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 badge-primary bg-opacity-75 rounded-full">
                                                	{index == 0 ?
                                                	<div>
                                                		<DiPython className="mr-1"/>
                                                	</div>
                                                	: index == 1 ?
                                                	<div>
                                                		<DiJavascript1 className="mr-1"/>
                                                	</div>
                                                	: index == 2 ?
                                                	<div>
                                                		<DiNodejs className="mr-1"/>
                                                	</div>
                                                	: index == 3 ?
                                                	<div>
                                                		<DiGit className="mr-1"/>
                                                	</div>
                                                	:
                                                	<div>
                                                		<DiDjango className="mr-1"/>
                                                	</div>}
                                                	<div className="text-base-content-important">
                                                    	{skill}
                                                	</div>
                                                </div>
                                            ))
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Skill;
